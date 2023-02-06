import React from 'react';

// import './assets/css/app.css';
import { ThemeProvider } from 'styled-components';

import { AccesProvider } from './contexts/AccesContext';
import { AppRoutes } from './routes';
import GlobalStyle from './styles/globals';
import dark from './styles/themes/dark';
// import light from './styles/themes/light';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <div>
        <GlobalStyle />
        <AccesProvider>
          <AppRoutes />
        </AccesProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
