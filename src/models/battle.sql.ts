import { pgTable, integer } from 'drizzle-orm/pg-core'
import { cakes, cakesToBattles } from '.'
import { relations } from 'drizzle-orm'

export const battles = pgTable('battles', {
    id: integer('id').primaryKey(),
    cake1_id: integer('cake1_id')
        .notNull()
        .references(() => cakes.id),
    cake2_id: integer('cake2_id')
        .notNull()
        .references(() => cakes.id),
    winner_id: integer('winner_id')
        .notNull()
        .references(() => cakes.id),
})

export const battleRelations = relations(battles, ({ many }) => ({
    cakes_to_battles: many(cakesToBattles),
}))
