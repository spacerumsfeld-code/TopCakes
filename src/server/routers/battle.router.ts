import { db } from '@/clients/db.client'
import { cakes, battles, cakesToBattles } from '@/models'
import { eq } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
import { defer, handleDeferredTasks } from '@/lib/async'
import { router } from '../__internals/router'
import { baseProcedure } from '../__internals'

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

            const newBattle = await db
                .insert(battles)
                .values({
                    cake1Id,
                    cake2Id,
                    winnerId,
                })
                .returning({ id: battles.id })

            defer([
                db
                    .update(cakes)
                    .set({
                        wins: sql`wins + 1`,
                    })
                    .where(eq(cakes.id, cake1Id)),
                db
                    .update(cakes)
                    .set({
                        losses: sql`losses + 1`,
                    })
                    .where(eq(cakes.id, cake2Id)),
                db.insert(cakesToBattles).values({
                    cakeId: cake1Id,
                    battleId: newBattle[0].id,
                }),
                db.insert(cakesToBattles).values({
                    cakeId: cake2Id,
                    battleId: newBattle[0].id,
                }),
            ])

            await handleDeferredTasks()

            return c.superjson({
                data: {
                    success: true,
                },
                error: null,
            })
        }),
})
