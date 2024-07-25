import { Hono } from 'hono'
import { db } from '@/clients/db.client'
import { cakes, battles, cakesToBattles } from '@/models'
import { eq } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { defer, handleDeferredTasks } from '@/_utils'

const battleRouter = new Hono().basePath('/battle')

const ZPostBattle = z.object({
    cake1Id: z.number().int(),
    cake2Id: z.number().int(),
    winnerId: z.number().int(),
})
export const postBattle = battleRouter.post(
    '/',
    zValidator('json', ZPostBattle, (result, c) => {
        if (!result.success) {
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

            const newBattle = await db
                .insert(battles)
                .values({
                    cake1Id,
                    cake2Id,
                    winnerId,
                })
                .returning({ id: battles.id })

            defer(() =>
                db
                    .update(cakes)
                    .set({
                        wins: sql`wins + 1`,
                    })
                    .where(eq(cakes.id, cake1Id)),
            )
            defer(() =>
                db
                    .update(cakes)
                    .set({
                        losses: sql`losses + 1`,
                    })
                    .where(eq(cakes.id, cake2Id)),
            )
            defer(() =>
                db.insert(cakesToBattles).values({
                    cakeId: cake1Id,
                    battleId: newBattle[0].id,
                }),
            )
            defer(() =>
                db.insert(cakesToBattles).values({
                    cakeId: cake2Id,
                    battleId: newBattle[0].id,
                }),
            )

            await handleDeferredTasks()

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

export { battleRouter }
