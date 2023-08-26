import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GameProvider from './contexts/GameContext.tsx'

import GlobalStyle from './styles/global.ts'
import { AppRoutes } from './routes.tsx'
import { CartProvider } from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <CartProvider>
        <AppRoutes />
        <ToastContainer autoClose={2000} />
      </CartProvider>
    </GameProvider>
    <GlobalStyle />
  </React.StrictMode>
)
