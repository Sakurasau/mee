import ReactDOM from 'react-dom/client'
import { startOAuthFlow } from './oauth'
import App from '@mee/app/App'

import { listen } from '@tauri-apps/api/event';

import './styles/fonts.css'

listen('redirect_uri', (event) => {
  console.log('Received event:', event.payload);
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App
    environments={{
      isTauri: true,
      oauth: { startOAuthFlow },
    }}
  />,
)
