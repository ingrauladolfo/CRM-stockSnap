import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MenuApp } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuApp />
  </StrictMode>,
)
