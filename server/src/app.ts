import express from 'express'

import { apiRouter } from '@/routes'

const app = express()

// Apply API Middleware
app.use(express.json())

// Apply API Routes
app.use('/api/v1', apiRouter)

export { app }
