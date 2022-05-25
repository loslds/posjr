import React from 'react'

import { Page1 } from '~/pages/Page1'
import { Page2 } from '~/pages/Page2'
import { Page3 } from '~/pages/Page3'
import { PageApp } from '~/pages/PageApp'

export interface IRoute {
  path: string
  element: React.FC
}

export const routeList: IRoute[] = [
  { path: '/page1', element: Page1 },
  { path: '/page2', element: Page2 },
  { path: '/page3', element: Page3 },
  { path: '/pageapp', element: PageApp }
  //
]
