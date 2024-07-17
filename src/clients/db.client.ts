import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { Resource } from 'sst'

const client = postgres(Resource.DatabaseUrl.value, { prepare: false })

export const db = drizzle(client)
