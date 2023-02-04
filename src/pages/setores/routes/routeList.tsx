import React from 'react';

import { SectorsPg } from '../SectorsPg';

export interface IRoute {
  path: string;
  exact: boolean;
  element: React.ReactNode | React.ReactElement;
}

export const RouteList: IRoute[] = [
  {
    path: '../SectorsPg',
    exact: true,
    element: <SectorsPg setor="" />
  }
];
