import * as http from 'http'

import chalk from 'chalk'

import { app } from './app'
import { logger } from './shared/utils/logger'

const PORT = Number(process.env.PORT ?? 3000)
const HOST = '0.0.0.0'

let server: http.Server

const startServer = async (): Promise<void> => {
  server = http.createServer(app)

  try {
    server.listen(PORT, HOST, () => {
      logger.info(chalk.greenBright(`Server is running on http://${HOST}:${PORT}`))
    })
  } catch (error) {
    logger.error(error)
  }
}

void startServer()
