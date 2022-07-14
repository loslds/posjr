import React, { ReactNode } from 'react';

import * as C from './styles';

type PropsSidebar = {
  children?: ReactNode;
};
export const Sidebar = ({ children }: PropsSidebar) => {
  return <C.Container>{children}</C.Container>;
};
