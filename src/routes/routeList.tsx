import React from 'react'

import { Page1 } from '~/pages/Page1'
import { PageTitleDouble } from '~/pages/PageTitleDouble'
import { PageTitleCenter } from '~/pages/PageTitleCenter'
import { PageApp } from '~/pages/PageApp'

export interface IRoute {
  path: string,
  element: React.FC
}

export const routeList: IRoute[] = [
  { path: '/page1', element: Page1 },
  { path: '/pagetitledouble', element: PageTitleDouble },
  { path: '/pagetitlecenter', element: PageTitleCenter },
  { path: '/pageapp', element: PageApp }
  //
]
