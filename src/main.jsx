import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/auth.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
    <ToastContainer />
  </AuthProvider>
)