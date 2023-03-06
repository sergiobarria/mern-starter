import express from 'express'

import { apiRouter } from './routes'

import { morganMiddleware } from './middleware/morgan.middleware'

const app = express()

// Apply API Middleware
app.use(express.json())
app.use(morganMiddleware)

// Apply API Routes
app.use('/api/v1', apiRouter)

export { app }
