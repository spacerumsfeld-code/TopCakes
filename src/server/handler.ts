import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
// import { z } from 'zod'
// import { zValidator } from '@hono/zod-validator'
import { db } from '@/clients'
import { users } from '@/domain/models'
import { eq } from 'drizzle-orm'

const app = new Hono().get('/user', async (c) => {
    console.info('c', c)
    const userBro = await db.select().from(users).where(eq(users.id, 1))

    return c.json({
        userBro,
    })
})

app.use(prettyJSON())
app.use(logger())

export type AppType = typeof app

export const handler = handle(app)
