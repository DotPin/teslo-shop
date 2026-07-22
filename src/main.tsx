import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { TesloShop } from './TesloShop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TesloShop />
  </StrictMode>,
)
