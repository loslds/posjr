import React from 'react';

import { AccesChvPin } from '../pages/AccesChvPin';
import { AccesEmail } from '../pages/AccesEmail';
import { AccesFone } from '../pages/AccesFone';
import { AccesForgot } from '../pages/AccesForgot';
import { AccesFunc } from '../pages/AccesFunc';
import { AccesNew } from '../pages/AccesNew';
import { AccesNew1 } from '../pages/AccesNew1';
import { AccesPg } from '../pages/AccesPg';
import { AccesPg0 } from '../pages/AccesPg0';
import { AccesPg1 } from '../pages/AccesPg1';
import { AccesPg2 } from '../pages/AccesPg2';
import { AccesPg3 } from '../pages/AccesPg3';
// import { AccesChvSms } from '~/pages/AccesSegura';
// import { AccesChvMail } from '~/pages/AccesSegura';
import { HomePage } from '../pages/HomePage';

export interface IRoute {
  path: string;
  exact: boolean;
  element: React.ReactNode | React.ReactElement;
}

export const RouteList: IRoute[] = [
  { path: '/accesfunc', exact: true, element: <AccesFunc /> },
  { path: '/accesforgot', exact: true, element: <AccesForgot /> },
  { path: '/accesfone', exact: true, element: <AccesFone /> },
  { path: '/accesemail', exact: true, element: <AccesEmail /> },
  { path: '/accesnew1', exact: true, element: <AccesNew1 /> },
  { path: '/accesnew', exact: true, element: <AccesNew /> },
  { path: '/accespg', exact: true, element: <AccesPg /> },
  { path: '/accespg0', exact: true, element: <AccesPg0 /> },
  { path: '/accespg1', exact: true, element: <AccesPg1 /> },
  { path: '/accespg2', exact: true, element: <AccesPg2 /> },
  { path: '/accespg3', exact: true, element: <AccesPg3 /> },
  { path: '/acceschvpin', exact: true, element: <AccesChvPin /> },
  // { path: '/acceschvsms', exact: true, element: <AccesChvSms /> },
  // { path: '/acceschvmail', exact: true, element: <AccesChvMail /> },
  { path: '/homepage', exact: true, element: <HomePage /> }
];
