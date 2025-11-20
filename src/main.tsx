import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Provider from './context/Provider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
    
)
