
export const isDev = () => import.meta.env.NODE_ENV !== 'production'
export const isProd = () => import.meta.env.NODE_ENV === 'production'