import { pgTable, integer, serial } from 'drizzle-orm/pg-core'
import { cakes, cakesToBattles } from './'
import { relations } from 'drizzle-orm'

export const battles = pgTable('battles', {
    id: serial('id').primaryKey(),
    cake1Id: integer('cake1_id')
        .notNull()
        .references(() => cakes.id),
    cake2Id: integer('cake2_id')
        .notNull()
        .references(() => cakes.id),
    winnerId: integer('winner_id')
        .notNull()
        .references(() => cakes.id),
})

export const battleRelations = relations(battles, ({ many }) => ({
    cakes_to_battles: many(cakesToBattles),
}))
