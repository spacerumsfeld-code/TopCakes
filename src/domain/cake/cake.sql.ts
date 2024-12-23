import { relations, sql } from 'drizzle-orm'
import {
    pgTable,
    serial,
    varchar,
    integer,
    jsonb,
    text,
    pgEnum,
    timestamp,
    boolean,
} from 'drizzle-orm/pg-core'
import { cakesToBattles } from '../battle/cake-battle.sql'
import { CakeType } from './cake.models'

export const cakeTypeEnum = pgEnum(
    'type',
    Object.values(CakeType) as [string, ...string[]],
)

export const cakes = pgTable('cakes', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    description: varchar('description', { length: 1024 }).notNull(),
    imageUrl: varchar('image_url', { length: 255 }).notNull(),
    wins: integer('wins').default(0).notNull(),
    type: cakeTypeEnum('type').$type<CakeType>().notNull(),
    recipe: text('recipe')
        .array()
        .notNull()
        .default(sql`'{}'::text[]`),
    ingredients: jsonb('ingredients')
        .notNull()
        .default(sql`'[]'::jsonb`)
        .$type<{ name: string; quantity: number; unit: string }[]>(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    lastUpdatedAt: timestamp('last_updated_at').defaultNow().notNull(),
    ownerAddress: varchar('owner_address', { length: 255 }),
    likes: integer('likes').default(0).notNull(),
    isNFT: boolean('is_nft').default(false).notNull(),
})

export const cakeRelations = relations(cakes, ({ many }) => ({
    cakes_to_battles: many(cakesToBattles),
}))
