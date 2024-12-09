import './styles/global.css'

import InitialAPI from '@mee/api/src/init'
import { IInitialState, useEnvironmentStore } from '@mee/entities/environment'
import { routeTree } from '@mee/routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'

const router = createRouter({
  routeTree,
  basepath: import.meta.env.VITE_CLIENT_WEB_BASE_PREFIX ?? '/',
})
const queryClient = new QueryClient()

InitialAPI({ server_url: import.meta.env.VITE_URL_SERVER })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => (
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Rubik',
        },
      }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  </StrictMode>
)

const AppWrapper = ({ environments }: { environments?: IInitialState }) => {
  environments && useEnvironmentStore.setState(environments)

  return <App />
}

export default AppWrapper
