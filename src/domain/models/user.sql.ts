import { pgTable, serial, varchar, date } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 255 }).notNull().unique(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    created_at: date('created_at').defaultNow().notNull(),
    last_updated_at: date('last_updated_at').defaultNow().notNull(),
})
