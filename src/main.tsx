import React from 'react'
import ReactDOM from 'react-dom/client'
import GameProvider from './contexts/GameProvider.tsx'
import GlobalStyle from './styles/global.ts'
import { AppRoutes } from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <AppRoutes />
    </GameProvider>
    <GlobalStyle />
  </React.StrictMode>
)
