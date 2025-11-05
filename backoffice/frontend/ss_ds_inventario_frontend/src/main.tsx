import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DSInventarioApp } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DSInventarioApp />
  </StrictMode>,
)
