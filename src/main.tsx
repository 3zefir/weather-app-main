import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './build/new-app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
