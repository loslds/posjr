import React from 'react';

import * as M from './styles';

type PropsMenuPgHidth = {
  children?: React.ReactNode | JSX.Element;
};
export const MenuPgHidth = ({ children }: PropsMenuPgHidth) => {
  return (
    <M.MenuContainerPg>
      <M.MenuContainerPgFlexWidth>{children}</M.MenuContainerPgFlexWidth>
    </M.MenuContainerPg>
  );
};
