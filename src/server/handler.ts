import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'
import { cakeRouter } from './cake.router'
import { battleRouter } from './battle.router'

const server = new Hono()

server.route('/', cakeRouter)
server.route('/', battleRouter)

server.use(prettyJSON())
server.use(logger())

export const handler = handle(server)
