import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core'
import { cakes } from './cake.sql'
import { relations } from 'drizzle-orm'

export const cakesToFavorites = pgTable('cakes_to_favorites', {
    id: serial('id').primaryKey(),
    address: varchar('address', { length: 255 }).notNull(),
    cakeId: integer('cake_id').references(() => cakes.id),
})

export const cakesToFavoritesRelations = relations(
    cakesToFavorites,
    ({ one }) => ({
        cake: one(cakes, {
            fields: [cakesToFavorites.cakeId],
            references: [cakes.id],
        }),
    }),
)
