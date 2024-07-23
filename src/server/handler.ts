import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { db } from '@/clients/db.client'
import { users, cakes, battles, cakesToBattles } from '@/models'
import { eq, not } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const ZGetRandomCake = z.object({
    cakeId: z.string(),
})

const ZPostBattle = z.object({
    cake1Id: z.number().int(),
    cake2Id: z.number().int(),
    winnerId: z.number().int(),
})

const app = new Hono()
    // Users
    .get('/user', async (c) => {
        try {
            const userBro = await db.select().from(users).where(eq(users.id, 1))

            return c.json({
                data: {
                    userBro,
                },
                error: null,
            })
        } catch (error) {
            return c.json({
                data: null,
                error: (error as Error).cause,
            })
        }
    })

    // Cakes
    .get(
        '/cakes/random',
        zValidator('query', ZGetRandomCake, (result, c) => {
            if (!result.success) {
                console.error(result)

                return c.json({
                    error: {
                        message: `Validation error`,
                    },
                    data: null,
                })
            }
        }),
        async (c) => {
            try {
                const { cakeId } = c.req.valid('query')

                const battleCake = await db
                    .select()
                    .from(cakes)
                    .orderBy(sql`random()`)
                    .limit(1)
                    .where(not(eq(cakes.id, Number(cakeId))))

                return c.json({
                    data: battleCake[0],
                    error: null,
                })
            } catch (error) {
                return c.json({
                    data: null,
                    error: (error as Error).cause,
                })
            }
        },
    )
    .get('/cakes/battle', async (c) => {
        try {
            const battleCakes = await db
                .select()
                .from(cakes)
                .orderBy(sql`random()`)
                .limit(2)

            return c.json({
                data: battleCakes,
                error: null,
            })
        } catch (error) {
            return c.json({
                data: null,
                error: (error as Error).cause,
            })
        }
    })

    // Battles
    .post(
        '/battle',
        zValidator('json', ZPostBattle, (result, c) => {
            if (!result.success) {
                console.error(result)
                return c.json({
                    error: {
                        message: `Validation error`,
                    },
                    data: null,
                })
            }
        }),
        async (c) => {
            try {
                const { cake1Id, cake2Id, winnerId } = c.req.valid('json')

                // Create battle
                const newBattle = await db
                    .insert(battles)
                    .values({
                        cake1Id,
                        cake2Id,
                        winnerId,
                    })
                    .returning({ id: battles.id })

                // Cleanup tasks
                await db
                    .update(cakes)
                    .set({
                        wins: sql`wins + 1`,
                    })
                    .where(eq(cakes.id, cake1Id))
                await db
                    .update(cakes)
                    .set({
                        losses: sql`losses + 1`,
                    })
                    .where(eq(cakes.id, cake2Id))
                await db.insert(cakesToBattles).values({
                    cakeId: cake1Id,
                    battleId: newBattle[0].id,
                })
                await db.insert(cakesToBattles).values({
                    cakeId: cake2Id,
                    battleId: newBattle[0].id,
                })

                return c.json({
                    data: {
                        success: true,
                    },
                    error: null,
                })
            } catch (error) {
                return c.json({
                    data: null,
                    error: {
                        message: (error as Error).message,
                    },
                })
            }
        },
    )

app.use(prettyJSON())
app.use(logger())

export type AppType = typeof app

export const handler = handle(app)
