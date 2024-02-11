import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const hono: Hono = new Hono()
hono.get('/assets/*', serveStatic({ root: './public' }))

const app = createApp({
  // @ts-ignore
  app: hono,
})

showRoutes(app)

export default app
