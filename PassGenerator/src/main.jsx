import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PassGenerator from './PassGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PassGenerator />
  </StrictMode>
)
