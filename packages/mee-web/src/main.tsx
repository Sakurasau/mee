import './app/styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ConfigProvider } from 'antd'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Rubik',
        },
      }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
