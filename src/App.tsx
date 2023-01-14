import React from 'react';

// inicial apos clonar main
import './assets/css/app.css';
import { AccesProvider } from './contexts/AccesContext';
import { AppRoutes } from './routes';

//novo
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
