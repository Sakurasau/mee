import { isDev } from '@mee/shared/lib/env'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

const loadDevtools = () =>
  Promise.all([
    import('@tanstack/router-devtools'),
    import('@tanstack/react-query-devtools'),
  ]).then(([routerDevtools, reactQueryDevtools]) => {
    return {
      default: () => (
        <>
          <routerDevtools.TanStackRouterDevtools />
          <reactQueryDevtools.ReactQueryDevtools />
        </>
      ),
    }
  })

const TanStackDevtools = isDev() ? lazy(loadDevtools) : () => null

function RootComponent() {
  return (
    <>
      <Outlet />
      <Suspense>
        <TanStackDevtools />
      </Suspense>
    </>
  )
}
