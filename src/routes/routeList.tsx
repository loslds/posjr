import React from 'react';

import { Reception } from '~/pages/reception';

import { Access } from '../pages/acces/Acess';
import {
  CaseAcces,
  CaseChanger,
  PinAcces1,
  PinAcces2,
  SmsAcces1,
  MailAcces1
} from '../pages/acces/case';
import { ForgotAcces, ForgotAcces1 } from '../pages/acces/forgot';
import { NewAcces, NewAcces1 } from '../pages/acces/new';
import { HomePage } from '../pages/HomePage';
import { PageMain } from '../pages/PageMain';
// import { AccesChvPin } from '../pages/AccesChvPin';
// import { AccesEmail } from '../pages/AccesEmail';
// import { AccesFone } from '../pages/AccesFone';
// import { AccesFunc } from '../pages/AccesFunc';
// import { AccesPg } from '../pages/AccesPg';
// import { AccesPg0 } from '../pages/AccesPg0';
// import { AccesPg1 } from '../pages/AccesPg1';
// import { AccesPg2 } from '../pages/AccesPg2';
// import { AccesPg3 } from '../pages/AccesPg3';

export interface IRoute {
  path: string;
  exact: boolean;
  element: React.ReactNode | React.ReactElement;
}

export const RouteList: IRoute[] = [
  { path: '/caseacces', exact: true, element: <CaseAcces /> },
  { path: '/casechanger', exact: true, element: <CaseChanger /> },
  { path: '/pinacces1', exact: true, element: <PinAcces1 /> },
  { path: '/pinacces2', exact: true, element: <PinAcces2 /> },
  { path: '/smsacces1', exact: true, element: <SmsAcces1 /> },
  { path: '/mailacces1', exact: true, element: <MailAcces1 /> },
  { path: '/forgotacces', exact: true, element: <ForgotAcces /> },
  { path: '/forgotacces1', exact: true, element: <ForgotAcces1 /> },
  { path: '/newacces', exact: true, element: <NewAcces /> },
  { path: '/newacces1', exact: true, element: <NewAcces1 /> },
  { path: '/access', exact: true, element: <Access /> },
  { path: '/homepage', exact: true, element: <HomePage /> },
  { path: '/pagemain', exact: true, element: <PageMain /> },
  { path: '/reception', exact: true, element: <Reception /> }

  // { path: '/accesfone', exact: true, element: <AccesFone /> },
  // { path: '/accesemail', exact: true, element: <AccesEmail /> },

  // { path: '/accespg', exact: true, element: <AccesPg /> },
  // { path: '/accespg0', exact: true, element: <AccesPg0 /> },
  // { path: '/accespg1', exact: true, element: <AccesPg1 /> },
  // { path: '/accespg2', exact: true, element: <AccesPg2 /> },
  // { path: '/accespg3', exact: true, element: <AccesPg3 /> },
  // { path: '/accesfunc', exact: true, element: <AccesFunc /> },
  // { path: '/acceschvpin', exact: true, element: <AccesChvPin /> },
];
