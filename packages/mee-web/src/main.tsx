import App, { router } from '@mee/app/App'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />)
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
