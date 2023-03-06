import * as http from 'http'

import { app } from './app'

const PORT = Number(process.env.PORT ?? 3000)
const HOST = '0.0.0.0'

let server: http.Server

const startServer = async (): Promise<void> => {
  server = http.createServer(app)

  try {
    server.listen(PORT, HOST, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

void startServer()
