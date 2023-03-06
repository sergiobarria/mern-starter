import * as mongoose from 'mongoose'

import { logger } from '@/shared/utils/logger'

const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://0.0.0.0:27017'

export const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI, {})
    logger.info('Connected to MongoDB')
  } catch (error) {
    logger.error('Failed to connect to MongoDB', error)
  }
}
