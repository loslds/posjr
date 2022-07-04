import React from 'react';

import { AccesPage } from '~/pages/AccesPage';
import { HomePage } from '~/pages/HomePage';
export interface IRoute {
  path: string;
  element: React.ReactNode | React.ReactElement;
}

export const routeList: IRoute[] = [
  { path: '/homepage', element: <HomePage /> },
  { path: '/accespage', element: <AccesPage /> }
];
