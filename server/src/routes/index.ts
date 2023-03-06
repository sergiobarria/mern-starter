import express, { Request, Response } from 'express'

const apiRouter = express.Router()

/**
 * @desc: Health check route
 * @endpoint: GET /api/v1/healthcheck
 */
apiRouter.get('/healthcheck', (_: Request, res: Response) => {
  res.json('OK!!!!')
})

export { apiRouter }
