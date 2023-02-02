import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SectorsPg } from '../SectorsPg';
import { IRoute, RouteList } from './routeList';

export const SectorRoutes: React.FC = () => {
  const renderRoutes = (routes: IRoute[]) => {
    return routes.map(({ path, element: Element }) => {
      return <Route key={`route-${path}`} path={path} element={Element} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SectorsPg />} />
        {renderRoutes(RouteList)}
      </Routes>
    </BrowserRouter>
  );
};
