import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Chat } from 'pages/chat'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
)
