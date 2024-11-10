import { pgTable, serial, integer } from 'drizzle-orm/pg-core'
import { battles } from './battle.sql'
import { cakes } from '../cake/cake.sql'
import { relations } from 'drizzle-orm'

export const cakesToBattles = pgTable('cakes_to_battles', {
    id: serial('id').primaryKey(),
    cakeId: integer('cake_id').references(() => cakes.id),
    battleId: integer('battle_id').references(() => battles.id),
})

export const cakesToBattlesRelations = relations(cakesToBattles, ({ one }) => ({
    cake: one(cakes, {
        fields: [cakesToBattles.cakeId],
        references: [cakes.id],
    }),
    battle: one(battles, {
        fields: [cakesToBattles.battleId],
        references: [battles.id],
    }),
}))
