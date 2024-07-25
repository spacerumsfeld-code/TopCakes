import { Hono } from 'hono'
import { db } from '@/clients/db.client'
import { cakes } from '@/models'
import { eq, not } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const cakeRouter = new Hono().basePath('/cakes')

const ZGetRandomCake = z.object({
    cakeId: z.string(),
})
export const getRandomCake = cakeRouter.get(
    '/random',
    zValidator('query', ZGetRandomCake, (result, c) => {
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

export const getFaceoffCakes = cakeRouter.get('/faceoff', async (c) => {
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

const ZGetLeaderboard = z.object({
    limit: z.string(),
    offset: z.string(),
})
export const getLeaderboardCakes = cakeRouter.get(
    '/leaderboard',
    zValidator('query', ZGetLeaderboard, (result, c) => {
        if (!result.success) {
            return c.json({
                error: {
                    message: JSON.stringify(result),
                },
                data: null,
            })
        }
    }),
    async (c) => {
        console.info('cake router: getLeaderboardCakes')
        try {
            const { limit, offset } = c.req.valid('query')

            const leaderboardCakes = await db
                .select()
                .from(cakes)
                .orderBy(sql`wins desc`)
                .limit(Number(limit))
                .offset(Number(offset))

            return c.json({
                data: {
                    leaderboardCakes,
                    nextOffset: Number(offset) + Number(limit),
                    hasMore: leaderboardCakes.length === Number(limit),
                },
                error: null,
            })
        } catch (error) {
            return c.json({
                data: null,
                error: {
                    message: (error as Error).cause,
                },
            })
        }
    },
)

export { cakeRouter }
