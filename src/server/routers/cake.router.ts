import { db } from '@/clients/db.client'
import { cakes as cakeTable, CakeType } from '@/domain'
import { sql, eq } from 'drizzle-orm'
import { z } from 'zod'
import { router } from '../_internals/router'
import { baseProcedure } from '../_internals'
import { HTTPException } from 'hono/http-exception'
import { handleAsync } from '@/lib'
import { CakeFilter, CakeSort } from '@/domain/cake'

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
    getSampleCakes: baseProcedure.query(async ({ c }) => {
        const [cakes, error] = await handleAsync(
            db
                .select({
                    id: cakeTable.id,
                    name: cakeTable.name,
                    image_url: cakeTable.imageUrl,
                })
                .from(cakeTable)
                .orderBy(sql`random()`)
                .limit(4),
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
    getLeaderboardCakes: baseProcedure
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
    getBakeryCakes: baseProcedure
        .input(
            z.object({
                limit: z.number(),
                offset: z.number(),
                filter: z.nativeEnum(CakeFilter),
                sort: z.nativeEnum(CakeSort),
            }),
        )
        .query(async ({ c, input }) => {
            const { limit, offset, filter, sort } = input

            const orderBy =
                sort === CakeSort.Wins ? sql`wins desc` : sql`created_at desc`

            const query = db
                .select()
                .from(cakeTable)
                .orderBy(orderBy)
                .limit(Number(limit))
                .offset(Number(offset))

            if (filter !== CakeFilter.None) {
                query.where(eq(cakeTable.type, filter as unknown as CakeType))
            }

            const [getBakeryCakesResponse, error] = await handleAsync(query)
            if (error) {
                throw new HTTPException(400, {
                    message: error.message,
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: {
                    cakes: getBakeryCakesResponse,
                    nextOffset: Number(offset) + Number(limit),
                    hasMore: !(getBakeryCakesResponse!.length < limit),
                },
            })
        }),
    createCake: baseProcedure
        .input(
            z.object({
                name: z.string().min(3),
                description: z.string().min(1),
                imageUrl: z.string(),
                type: z.nativeEnum(CakeType),
                recipe: z.array(z.string()).max(10),
                ingredients: z.array(
                    z.object({
                        name: z.string(),
                        quantity: z.number().min(1),
                        unit: z.string(),
                    }),
                ),
            }),
        )
        .mutation(async ({ c, input }) => {
            const [createCakeResponse, error] = await handleAsync(
                db
                    .insert(cakeTable)
                    .values(input)
                    .returning({ id: cakeTable.id }),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: 'Error creating cake',
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: {
                    id: createCakeResponse![0].id,
                    success: true,
                },
            })
        }),
})
