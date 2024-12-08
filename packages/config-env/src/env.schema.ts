import { z } from 'zod'

export const schema = z.object({
  VITE_CLIENT_WEB_PORT: z.string().optional(),
  VITE_CLIENT_WEB_BASE_PREFIX: z.string().optional(),
  VITE_URL_SERVER_AUTH_GOOGLE: z.string(),
  VITE_URL_SERVER: z.string(),

  TAURI_DEV_HOST: z.string().optional(),
})

export type EnvSchemaType = z.infer<typeof schema>
