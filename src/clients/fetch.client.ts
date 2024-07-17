import { AppType } from '../server/handler'
import { hc } from 'hono/client'
import { Resource } from 'sst'

const fetchClient = hc<AppType>(Resource.Server.url)

export { fetchClient }
