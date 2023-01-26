import React from 'react';

import { SectorsPg } from '~/pages/setores';

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
export interface IRoute {
  path: string;
  exact: boolean;
  element: React.ReactNode | React.ReactElement;
}

export const RouteList: IRoute[] = [
  { path: '/caseacces', exact: true, element: <CaseAcces /> },
  { path: '/casechanger', exact: true, element: <CaseChanger /> },
  { path: '/pinacces1', exact: true, element: <PinAcces1 titulopcao="" /> },
  { path: '/pinacces2', exact: true, element: <PinAcces2 /> },
  { path: '/smsacces1', exact: true, element: <SmsAcces1 /> },
  { path: '/mailacces1', exact: true, element: <MailAcces1 /> },
  { path: '/forgotacces', exact: true, element: <ForgotAcces /> },
  { path: '/forgotacces1', exact: true, element: <ForgotAcces1 /> },
  { path: '/newacces', exact: true, element: <NewAcces /> },
  { path: '/newacces1', exact: true, element: <NewAcces1 /> },
  { path: '/access', exact: true, element: <Access /> },
  { path: '/homepage', exact: true, element: <HomePage /> },
  {
    path: '/pages/setores/sectorsPg',
    exact: true,
    element: <SectorsPg setor="" />
  }
];
