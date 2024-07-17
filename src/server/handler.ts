import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const ZGetGreeting = z.object({
    name: z.string(),
})

const app = new Hono().get(
    '/greeting',
    zValidator('query', ZGetGreeting),
    async (c) => {
        const { name } = c.req.valid('query')

        return c.json({
            message: `Hello, ${name}!`,
        })
    },
)

app.use(prettyJSON())
app.use(logger())

export type AppType = typeof app

export const handler = handle(app)
