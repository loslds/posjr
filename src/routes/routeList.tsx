import React from 'react';

import { AccesPage } from '~/pages/AccesPage';
import { AccesPage1 } from '~/pages/AccesPage1';
import { HomePage } from '~/pages/HomePage';

export interface IRoute {
  path: string;
  exact: boolean;
  element: React.ReactNode | React.ReactElement;
}

export const routeList: IRoute[] = [
  { path: '/accespage1', exact: true, element: <AccesPage1 /> },
  { path: '/accespage', exact: true, element: <AccesPage /> },
  { path: '/homepage', exact: true, element: <HomePage /> }
];
