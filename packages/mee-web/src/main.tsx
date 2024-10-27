import React from 'react'
import ReactDOM from 'react-dom/client'
import Loading from '@mee/shared/ui/Loading'
import { Chat } from '@mee/pages/chat'
import './app/styles/global.css'

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
