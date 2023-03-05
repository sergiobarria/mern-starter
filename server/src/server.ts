import * as http from 'http'

import { app } from './app'

const PORT = Number(process.env.PORT ?? 3000)

let server: http.Server

const startServer = async (): Promise<void> => {
  server = http.createServer(app)

  try {
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

void startServer()
