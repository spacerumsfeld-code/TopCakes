import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { handle } from 'hono/aws-lambda'
import { battleRouter } from './routers/battle.router'
import { cakeRouter } from './routers/cake.router'

const app = new Hono().basePath('/api').use(cors())

const apiRouter = app.route('/battle', battleRouter).route('/cake', cakeRouter)

export const handler = handle(apiRouter)

export type ApiSpec = typeof apiRouter
