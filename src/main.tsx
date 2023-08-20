import React from 'react'
import ReactDOM from 'react-dom/client'
import GameContextResponseAPI from './Contexts/GameContextProvider.tsx'
import GlobalStyle from './styles/global.ts'
import { AppRoutes } from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameContextResponseAPI>
      <AppRoutes />
    </GameContextResponseAPI>
    <GlobalStyle />
  </React.StrictMode>
)
