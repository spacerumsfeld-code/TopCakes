import { Hono } from 'hono'
import { hc } from 'hono/client'
import { Resource } from 'sst'

const api = <T extends Hono<any, any, any>>() =>
    hc<T>(process.env.isLocal ? process.env.API_URL! : Resource.Server.url)

export { api }
