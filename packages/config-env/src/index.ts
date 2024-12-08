import { resolve } from 'path'

import dotenv from 'dotenv'

import { schema } from './env.schema'
import { isProd } from './utils'

// dotenv.config()
const fileName = isProd() ? '.env' : '.env.development'
dotenv.config({ path: resolve(__dirname, `../../../${fileName}`) })

const result = schema.safeParse(process.env)

if (!result.success) {
  console.error('❌ Invalid environment variables:', result.error.format())
  process.exit(1)
}

export const env = result.data
export * from './utils'
export * from './env.schema'
