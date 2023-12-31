import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { SnackProvider } from './contexts/SnackContext.tsx'

import GlobalStyle from './styles/global.ts'
import { AppRoutes } from './routes.tsx'
import { CartProvider } from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <SnackProvider>
        <CartProvider>
          <AppRoutes />
          <ToastContainer autoClose={2000} />
        </CartProvider>
      </SnackProvider>
    </Router>
    <GlobalStyle />
  </React.StrictMode>
)
