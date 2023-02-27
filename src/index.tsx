import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import AppRoutes from './AppRoutes'
import { AuthProvider } from 'hooks/useAuth'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
