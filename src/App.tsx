import React from 'react';

// import './assets/css/app.css';
import { ThemeProvider } from 'styled-components';

// import { DefaultTheme } from '../src/components/layouts/stylelayout';
// import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';
import { AccesProvider } from './contexts/AccesContext';
import { AppRoutes } from './routes';
import GlobalStyle from './styles/globals';
import * as C from './styles/styles';

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <C.Container>
          <GlobalStyle />
          <AccesProvider>
            <AppRoutes />
          </AccesProvider>
        </C.Container>
      </ThemeProvider>
    </>
  );
};

export default App;
