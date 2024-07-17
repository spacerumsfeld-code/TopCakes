import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { db } from '@/clients/db.client'
import { users, cakes } from '@/models'
import { eq } from 'drizzle-orm'
import { sql } from 'drizzle-orm'

const app = new Hono()
    // Users
    .get('/user', async (c) => {
        const userBro = await db.select().from(users).where(eq(users.id, 1))

        return c.json({
            userBro,
        })
    })

    // Cakes
    .get('/cakes/battle', async (c) => {
        console.info('am I getting called?')
        const battleCakes = await db
            .select()
            .from(cakes)
            .orderBy(sql`random()`)
            .limit(2)

        return c.json({
            battleCakes,
        })
    })

app.use(prettyJSON())
app.use(logger())

export type AppType = typeof app

export const handler = handle(app)
