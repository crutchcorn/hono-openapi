import { serve } from '@hono/node-server'
import {app} from "./shared.ts";
import { openAPISpecs } from 'hono-openapi'
import { apiReference } from '@scalar/hono-api-reference'

app.get(
  '/openapi',
  openAPISpecs(app, {
    documentation: {
      info: {
        title: 'Hono API',
        version: '1.0.0',
        description: 'Greeting API',
      },
      servers: [
        { url: 'http://localhost:3000', description: 'Local Server' },
      ],
    },
  })
)

app.get(
  '/docs',
  apiReference({
    theme: 'saturn',
    spec: { url: '/openapi' },
  })
)
serve(app);
