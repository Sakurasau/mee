import './styles/global.css'

import React from 'react'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IInitialState, useEnvironmentStore } from '@mee/entities/environment'
import { routeTree } from '@mee/routeTree.gen'

const router = createRouter({
  routeTree,
  basepath: import.meta.env.VITE_CLIENT_WEB_BASE_PREFIX ?? '/',
})
const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => (
  <React.StrictMode>
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
  </React.StrictMode>
)

const AppWrapper = ({ environments }: { environments?: IInitialState }) => {
  environments && useEnvironmentStore.setState(environments)

  return <App />
}

export default AppWrapper
