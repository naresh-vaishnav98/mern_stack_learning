import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import Forms from './components/Forms'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Forms/>
  </StrictMode>,
)
