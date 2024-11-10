import { z } from 'zod'
import { defer, handleAsync, handleDeferredTasks } from '@/lib/async'
import { router } from '../_internals/router'
import { baseProcedure } from '../_internals'
import { HTTPException } from 'hono/http-exception'
import { Battle } from '@/domain/battle'
import { Cake } from '@/domain/cake'

export const battleRouter = router({
    create: baseProcedure
        .input(
            z.object({
                cake1Id: z.number().int(),
                cake2Id: z.number().int(),
                winnerId: z.number().int(),
            }),
        )
        .mutation(async ({ c, input }) => {
            const { cake1Id, cake2Id, winnerId } = input

            const [newBattle, error] = await handleAsync(
                Battle.create({
                    cake1Id,
                    cake2Id,
                    winnerId,
                }),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: 'pumpkin error',
                    cause: (error as Error).cause,
                })
            }

            defer([
                Cake.updateWinnerCake(winnerId),
                Battle.mapBattleToCake(cake1Id, newBattle![0].id),
                Battle.mapBattleToCake(cake2Id, newBattle![0].id),
            ])

            await handleDeferredTasks()

            return c.superjson({
                data: {
                    success: true,
                },
            })
        }),
})
