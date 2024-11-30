import './app/styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

export default App
