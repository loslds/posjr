import React from 'react';

import { HomePage } from '~/pages/HomePage';
import { ModalPage } from '~/pages/ModalPage';
import { Page1 } from '~/pages/Page1';
import { PageApp } from '~/pages/PageApp';
import { PageTitleCenter } from '~/pages/PageTitleCenter';
import { PageTitleDouble } from '~/pages/PageTitleDouble';
export interface IRoute {
  path: string;
  element: React.FC | React.ReactNode;
}

export const routeList: IRoute[] = [
  { path: '/homepage', element: HomePage },
  { path: '/modalpage', element: ModalPage },
  { path: '/page1', element: Page1 },
  { path: '/pagetitledouble', element: PageTitleDouble },
  { path: '/pagetitlecenter', element: PageTitleCenter },
  { path: '/pageapp', element: PageApp }

  //
];
