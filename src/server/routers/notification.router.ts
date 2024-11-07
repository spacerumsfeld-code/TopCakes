import { HTTPException } from 'hono/http-exception'
import { baseProcedure } from '../_internals'
import { router } from '../_internals/router'
import { handleAsync } from '@/lib'
import { emailClient } from '@/clients/email.client'
import { z } from 'zod'

export const notificationRouter = router({
    subscribeToNewsletter: baseProcedure
        .input(
            z.object({
                email: z.string().email(),
            }),
        )
        .mutation(async ({ c, input }) => {
            const { email } = input

            const [_, error] = await handleAsync(
                emailClient.addEmailToMailingList({
                    email,
                }),
            )
            if (error) {
                throw new HTTPException(400, {
                    message: (error as Error).message,
                    cause: (error as Error).cause,
                })
            }

            return c.superjson({
                data: {
                    success: true,
                },
            })
        }),
})
