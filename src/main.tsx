import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './styles/global.ts';
import { AppRoutes } from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
    <GlobalStyle />
  </React.StrictMode>
);
