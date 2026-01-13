import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Motion from './Motion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Motion/>
  </StrictMode>,
)
