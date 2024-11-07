import { pgTable, serial, integer, primaryKey } from 'drizzle-orm/pg-core'
import { cakes, battles } from './index'
import { relations } from 'drizzle-orm'

/**
 * |  +434ms      Deferred task rejected: NeonDbError: duplicate key value violates unique constraint "cakes_to_battles_cake_id_bat
tle_id_pk"
|  +434ms      Deferred task rejected: NeonDbError: duplicate key value violates unique constraint "cakes_to_battles_cake_id_bat
tle_id_pk"|  +434ms      Deferred task rejected: NeonDbError: duplicate key value violates unique constraint "cakes_to_battles_c
ake_id_battle_id_pk"|
 */

// TODO: figure out the above in which two cakes encounter each other again. revise composite primary key to be unique.

export const cakesToBattles = pgTable(
    'cakes_to_battles',
    {
        id: serial('id'),
        cakeId: integer('cake_id').references(() => cakes.id),
        battleId: integer('battle_id').references(() => battles.id),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.cakeId, t.battleId] }),
    }),
)

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
