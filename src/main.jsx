import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 class="m-5 text-green-700">Hello world!</h1>
  </StrictMode>,
)