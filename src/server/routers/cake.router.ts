import { db } from '@/clients/db.client'
import { cakes } from '@/models'
import { eq, not } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
import { router } from '../__internals/router'
import { baseProcedure } from '../__internals'
import { HTTPException } from 'hono/http-exception'

export const cakeRouter = router({
    getRandomCake: baseProcedure
        .input(
            z.object({
                cakeId: z.number().int(),
            }),
        )
        .query(async ({ c, input }) => {
            try {
                const { cakeId } = input

                const battleCake = await db
                    .select()
                    .from(cakes)
                    .orderBy(sql`random()`)
                    .limit(1)
                    .where(not(eq(cakes.id, Number(cakeId))))

                return c.superjson({
                    data: battleCake[0],
                    error: null,
                })
            } catch (error) {
                throw new HTTPException(400, {
                    message: 'pumpkin error',
                    cause: (error as Error).cause,
                })
            }
        }),
    getFaceoffCakes: baseProcedure.query(async ({ c }) => {
        try {
            const battleCakes = await db
                .select()
                .from(cakes)
                .orderBy(sql`random()`)
                .limit(2)

            return c.superjson({
                data: battleCakes,
                error: null,
            })
        } catch (error) {
            throw new HTTPException(400, {
                message: (error as Error).message,
                cause: (error as Error).cause,
            })
        }
    }),
    getLeaderboardCakes: baseProcedure
        .input(
            z.object({
                limit: z.string(),
                offset: z.string(),
            }),
        )
        .query(async ({ c, input }) => {
            try {
                const { limit, offset } = input

                const leaderboardCakes = await db
                    .select()
                    .from(cakes)
                    .orderBy(sql`wins desc`)
                    .limit(Number(limit))
                    .offset(Number(offset))

                return c.superjson({
                    data: {
                        leaderboardCakes,
                        nextOffset: Number(offset) + Number(limit),
                        hasMore: leaderboardCakes.length === Number(limit),
                    },
                    error: null,
                })
            } catch (error) {
                throw new HTTPException(400, {
                    message: 'pumpkin error',
                    cause: (error as Error).cause,
                })
            }
        }),
})
