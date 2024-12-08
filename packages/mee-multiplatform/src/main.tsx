import App from '@mee/app/App'
import ReactDOM from 'react-dom/client'

import './styles/fonts.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App
    environments={{
      isTauri: true,
      oauth: {},
    }}
  />,
)
