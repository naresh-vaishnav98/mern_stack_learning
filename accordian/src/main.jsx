import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import Accordian from './Accordian'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordian/>
  </StrictMode>
)
