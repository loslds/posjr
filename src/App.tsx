import React from 'react';

import './assets/css/app.css';
import { FormProvider } from './contexts/FormContext';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <>
      <FormProvider>
        <AppRoutes />
      </FormProvider>
    </>
  );
};
