import { AppType } from '../server/handler'
import { hc } from 'hono/client'
import { Resource } from 'sst'

const api = hc<AppType>(Resource.Server.url)

export { api }
