import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { Resource } from 'sst'

const sql = neon(
    process.env.NEXT_PUBLIC_IS_LOCAL!
        ? process.env.DATABASE_URL!
        : Resource.DatabaseUrl.value,
)

export const db = drizzle(sql)
