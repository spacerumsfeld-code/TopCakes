import { relations, sql } from 'drizzle-orm'
import { pgTable, serial, varchar, integer, text } from 'drizzle-orm/pg-core'
import { cakesToBattles } from '.'

export const cakes = pgTable('cakes', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    image_url: varchar('image_url', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).notNull(),
    recipe: varchar('recipe', { length: 255 }).notNull(),
    ingredients: text('ingredients')
        .array()
        .notNull()
        .default(sql`'{}'::text[]`),
    description: varchar('description', { length: 1024 }).notNull(),
    wins: integer('wins').default(0).notNull(),
    losses: integer('losses').default(0).notNull(),
    vector: integer('vector')
        .array()
        .notNull()
        .default(sql`'{}'::integer[]`),
})

export const cakeRelations = relations(cakes, ({ many }) => ({
    cakes_to_battles: many(cakesToBattles),
}))
