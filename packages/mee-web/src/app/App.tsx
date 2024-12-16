import './styles/global.css'

import { IInitialState, useEnvironmentStore } from '@mee/entities/environment'
import { routeTree } from '@mee/routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'

interface AppProps {
  environments?: IInitialState
}

const router = createRouter({
  routeTree,
  basepath: import.meta.env.VITE_CLIENT_WEB_BASE_PREFIX ?? '/',
})

const App = ({ environments }: AppProps) => {
  if (environments) useEnvironmentStore.setState(environments)

  const queryClient = new QueryClient()

  return (
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
}

export default App
export { router }
