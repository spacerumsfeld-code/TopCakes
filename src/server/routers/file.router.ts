import { HTTPException } from 'hono/http-exception'
import { baseProcedure } from '../_internals'
import { router } from '../_internals/router'
import { handleAsync } from '@/lib'
import { s3Client } from '@/clients/s3.client'

export const fileRouter = router({
    generatePresignedUrl: baseProcedure.query(async ({ c }) => {
        const [presignedUrl, error] = await handleAsync(
            s3Client.getPresignedUrl(),
        )
        if (error) {
            throw new HTTPException(400, {
                message: (error as Error).message,
                cause: (error as Error).cause,
            })
        }

        return c.superjson({
            data: {
                url: presignedUrl!,
            },
        })
    }),
})
