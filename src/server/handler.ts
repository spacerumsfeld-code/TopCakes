import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { db } from '@/clients/db.client'
import { users, cakes, battles } from '@/models'
import { eq } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const ZPostBattle = z.object({
    cake1Id: z.number().int().min(1).max(100),
    cake2Id: z.number().int().min(1).max(100),
    winnerId: z.number().int().min(1).max(100),
})

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
        const battleCakes = await db
            .select()
            .from(cakes)
            .orderBy(sql`random()`)
            .limit(2)

        return c.json({
            battleCakes,
        })
    })

    // Battles
    .post('/battle', zValidator('json', ZPostBattle), async (c) => {
        const { cake1Id, cake2Id, winnerId } = c.req.valid('json')

        const battle = await db.insert(battles).values({
            cake1_id: cake1Id,
            cake2_id: cake2Id,
            winner_id: winnerId,
        })

        return c.json({
            battle,
        })
    })

app.use(prettyJSON())
app.use(logger())

export type AppType = typeof app

export const handler = handle(app)
