import React from 'react'
import ReactDOM from 'react-dom/client'
import { Chat } from '@/pages/chat'
import './app/styles/global.css'
import Loading from './shared/ui/Loading'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Loading className="m-auto size-64" />
    <Loading className="m-auto size-32" />
    <Loading className="m-auto size-16" />
    <Chat />
  </React.StrictMode>,
)
