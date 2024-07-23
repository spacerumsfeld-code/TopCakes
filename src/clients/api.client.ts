import { AppType } from '../server/handler'
import { hc } from 'hono/client'
import { Resource } from 'sst'

const api = hc<AppType>(
    process.env.isLocal ? process.env.API_URL! : Resource.Server.url,
)

export { api }
