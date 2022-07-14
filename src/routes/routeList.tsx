import React from 'react';

import { AccesNew } from '~/pages/AccesNew';
import { AccesPg0 } from '~/pages/AccesPg0';
import { AccesPg1 } from '~/pages/AccesPg1';
import { AccesPg2 } from '~/pages/AccesPg2';
import { AccesPg3 } from '~/pages/AccesPg3';
import { AccesSb0 } from '~/pages/AccesSd0';
import { HomePage } from '~/pages/HomePage';

export interface IRoute {
  path: string;
  exact: boolean;
  element: React.ReactNode | React.ReactElement;
}

export const RouteList: IRoute[] = [
  { path: '/accesnew', exact: true, element: <AccesNew /> },
  { path: '/accessb0', exact: true, element: <AccesSb0 /> },
  { path: '/accespg0', exact: true, element: <AccesPg0 /> },
  { path: '/accespg1', exact: true, element: <AccesPg1 /> },
  { path: '/accespg2', exact: true, element: <AccesPg2 /> },
  { path: '/accespg3', exact: true, element: <AccesPg3 /> },
  { path: '/homepage', exact: true, element: <HomePage /> }
];
