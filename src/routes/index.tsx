import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AccesPage } from '~/pages/AccesPage';
import { AccesPage1 } from '~/pages/AccesPage1';
import { AccesPage2 } from '~/pages/AccesPage2';
import { HomePage } from '~/pages/HomePage';

import { IRoute, RouteList } from './routeList';

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
        <Route index element={<AccesPage />} />
        <Route index element={<AccesPage1 />} />
        <Route index element={<AccesPage2 />} />

        {renderRoutes(RouteList)}
      </Routes>
    </BrowserRouter>
  );
};
