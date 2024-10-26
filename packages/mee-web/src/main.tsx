import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/global.css'
import Loading from '@/shared/ui/Loading'
import { Chat } from '@/pages/chat'

const Main = ({}) => {
  return (
    <>
      <Loading className="m-auto size-64" />
      <Loading className="m-auto size-32" />
      <Loading className="m-auto size-16" />
      <Chat />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)

export default Main