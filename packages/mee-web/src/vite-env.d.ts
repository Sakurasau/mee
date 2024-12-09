/// <reference types="vite/client" />

import { EnvSchemaType } from '@config/env/env.schema'

type EnvSchema = z.infer<typeof schema>

declare global {
  interface ImportMetaEnv extends EnvSchemaType {}
}
