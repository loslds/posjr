import React from 'react';

import './assets/css/app.css';
import { AccesProvider } from './contexts/AccesContext';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <>
      <AccesProvider>
        <AppRoutes />
      </AccesProvider>
    </>
  );
};

export default App;
