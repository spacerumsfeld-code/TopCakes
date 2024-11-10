import { z } from 'zod'
import { router } from '../_internals/router'
import { baseProcedure } from '../_internals'
import { HTTPException } from 'hono/http-exception'
import { handleAsync } from '@/lib'
import { Cake } from '@/domain/cake'
import { CakeType, CakeFilter, CakeSort } from '@/domain/cake/cake.models'

export const cakeRouter = router({
    getCakeById: baseProcedure
        .input(
            z.object({
                id: z.number(),
            }),
        )
        .query(async ({ c, input }) => {
            const { id } = input

            const [cake, error] = await handleAsync(
                Cake.getCakeById(Number(id)),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: (error as Error).message,
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: { cake },
            })
        }),
    getCakesByAddress: baseProcedure
        .input(
            z.object({
                limit: z.number(),
                offset: z.number(),
                filter: z.nativeEnum(CakeFilter),
                sort: z.nativeEnum(CakeSort),
                address: z.string(),
            }),
        )
        .query(async ({ c, input }) => {
            const { limit, offset, filter, sort, address } = input

            const [getCakesByAddressResponse, error] = await handleAsync(
                Cake.getCakesByAddress({
                    address,
                    limit,
                    offset,
                    filter,
                    sort,
                }),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: error.message,
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: {
                    cakes: getCakesByAddressResponse,
                    nextOffset: offset + limit,
                    hasMore: !(getCakesByAddressResponse!.length < limit),
                },
            })
        }),
    getSampleCakes: baseProcedure.query(async ({ c }) => {
        const [cakes, error] = await handleAsync(Cake.getSampleCakes())
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
        const [cakes, error] = await handleAsync(Cake.getBakeOffCakes())
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
                limit: z.number(),
                offset: z.number(),
            }),
        )
        .query(async ({ c, input }) => {
            const { limit, offset } = input

            const [cakes, error] = await handleAsync(
                Cake.getLeaderboardCakes({
                    limit,
                    offset,
                }),
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
                    hasMore: !(cakes!.length < limit),
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

            const [getBakeryCakesResponse, error] = await handleAsync(
                Cake.getBakeryCakes({
                    limit,
                    offset,
                    filter,
                    sort,
                }),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: error.message,
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: {
                    cakes: getBakeryCakesResponse,
                    nextOffset: offset + limit,
                    hasMore: !(getBakeryCakesResponse!.length < limit),
                },
            })
        }),
    createCake: baseProcedure
        .input(
            z.object({
                ownerAddress: z.string(),
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
                Cake.create(input),
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
