import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AccesPg0 } from '~/pages/AccesPg0';
import { AccesPg1 } from '~/pages/AccesPg1';
import { AccesPg2 } from '~/pages/AccesPg2';
import { AccesPg3 } from '~/pages/AccesPg3';
import { HomePage } from '~/pages/HomePage';

import { IRoute, RouteList } from './RouteList';

export const AppRoutes: React.FC = () => {
  const renderRoutes = (routes: IRoute[]) => {
    return routes.map(({ path, element: Element }) => {
      return <Route key={`route-${path}`} path={path} element={Element} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route index element={<AccesPg0 />} />
        <Route index element={<AccesPg1 />} />
        <Route index element={<AccesPg2 />} />
        <Route index element={<AccesPg3 />} />
        {renderRoutes(RouteList)}
      </Routes>
    </BrowserRouter>
  );
};
