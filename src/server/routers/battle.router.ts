import { db } from '@/clients/db.client'
import { cakes, battles, cakesToBattles } from '@/domain'
import { eq } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
import { defer, handleAsync, handleDeferredTasks } from '@/lib/async'
import { router } from '../_internals/router'
import { baseProcedure } from '../_internals'
import { HTTPException } from 'hono/http-exception'

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
                db
                    .insert(battles)
                    .values({
                        cake1Id,
                        cake2Id,
                        winnerId,
                    })
                    .returning({ id: battles.id }),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: 'pumpkin error',
                    cause: (error as Error).cause,
                })
            }

            defer([
                db
                    .update(cakes)
                    .set({
                        wins: sql`wins + 1`,
                    })
                    .where(eq(cakes.id, cake1Id)),
                db.insert(cakesToBattles).values({
                    cakeId: cake1Id,
                    battleId: newBattle![0].id,
                }),
                db.insert(cakesToBattles).values({
                    cakeId: cake2Id,
                    battleId: newBattle![0].id,
                }),
            ])

            await handleDeferredTasks()

            return c.superjson({
                data: {
                    success: true,
                },
            })
        }),
})
