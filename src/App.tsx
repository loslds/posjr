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

// import React from 'react';
// import { BrowserRouter, Router } from 'react-router-dom';

// import Routes from './routes';
// import history from './services/History';

// function App() {
//   return (
//     <BrowserRouter>
//       <Router>
//         <Routes />
//       </Router>
//     </BrowserRouter>
//   );
// }
