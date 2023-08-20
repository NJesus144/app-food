import React from 'react'
import ReactDOM from 'react-dom/client'

import GameProvider from './contexts/GameContext.tsx'

import GlobalStyle from './styles/global.ts'
import { AppRoutes } from './routes.tsx'
import { CartProvider } from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </GameProvider>
    <GlobalStyle />
  </React.StrictMode>
)
