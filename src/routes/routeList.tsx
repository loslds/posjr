import React from 'react';

import { AccesPage } from '~/pages/AccesPage';
export interface IRoute {
  path: string;
  element: React.FC | React.ReactNode;
}

export const routeList: IRoute[] = [{ path: '/accespage', element: AccesPage }];
