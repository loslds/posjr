import React from 'react';

// inicial apos clonar main
import './assets/css/app.css';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};
