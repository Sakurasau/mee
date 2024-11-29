import { z } from 'zod'
import dotenv from 'dotenv'
import { schema } from './env.schema'
import { resolve } from 'path'

// dotenv.config()
dotenv.config({ path: resolve(__dirname, '../../.env') })

const result = schema.safeParse(process.env)

if (!result.success) {
  console.error('❌ Invalid environment variables:', result.error.format())
  process.exit(1)
}

export const env = result.data
