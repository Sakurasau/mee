import App from '@mee/app/App'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />)
}
