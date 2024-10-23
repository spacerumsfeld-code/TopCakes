import { db } from '@/clients/db.client'
import { cakes as cakeTable } from '@/models'
import { sql, eq } from 'drizzle-orm'
import { z } from 'zod'
import { router } from '../_internals/router'
import { baseProcedure } from '../_internals'
import { HTTPException } from 'hono/http-exception'
import { handleAsync } from '@/lib'

export const cakeRouter = router({
    getCakeById: baseProcedure
        .input(
            z.object({
                id: z.number(),
            }),
        )
        .query(async ({ c, input }) => {
            const { id } = input

            const [cakes, error] = await handleAsync(
                db
                    .select()
                    .from(cakeTable)
                    .where(eq(cakeTable.id, Number(id)))
                    .limit(1),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: (error as Error).message,
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: { cake: cakes![0] },
            })
        }),
    getBakeOffCakes: baseProcedure.query(async ({ c }) => {
        const [cakes, error] = await handleAsync(
            db
                .select()
                .from(cakeTable)
                .orderBy(sql`random()`)
                .limit(2),
        )
        if (error) {
            throw new HTTPException(400, {
                message: (error as Error).message,
                cause: (error as Error).cause,
            })
        }

        return c.superjson({
            data: { cakes },
        })
    }),
    getCakes: baseProcedure
        .input(
            z.object({
                limit: z.string(),
                offset: z.string(),
            }),
        )
        .query(async ({ c, input }) => {
            const { limit, offset } = input

            const [cakes, error] = await handleAsync(
                db
                    .select()
                    .from(cakeTable)
                    .orderBy(sql`wins desc`)
                    .limit(Number(limit))
                    .offset(Number(offset)),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: 'pumpkin error',
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: {
                    cakes,
                    nextOffset: Number(offset) + Number(limit),
                    hasMore: cakes?.length ?? 0 === Number(limit),
                },
            })
        }),
})
