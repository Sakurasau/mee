export interface IOAuthConfig {
  jwtToken?: string
  startOAuthFlow?: (authUrl: string) => Promise<void>
}
