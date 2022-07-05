import React from 'react';

import { AccesPage } from '~/pages/AccesPage';
import { AccesPage1 } from '~/pages/AccesPage1';
import { AccesPage2 } from '~/pages/AccesPage2';
import { HomePage } from '~/pages/HomePage';

export interface IRoute {
  path: string;
  exact: boolean;
  element: React.ReactNode | React.ReactElement;
}

export const RouteList: IRoute[] = [
  { path: '/accespage', exact: true, element: <AccesPage /> },
  { path: '/accespage1', exact: true, element: <AccesPage1 /> },
  { path: '/accespage2', exact: true, element: <AccesPage2 /> },
  { path: '/homepage', exact: true, element: <HomePage /> }
];
