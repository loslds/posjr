import React from 'react';

import * as M from './styles';

type PropsMenuPgLeft = {
  children?: React.ReactNode | JSX.Element;
};
export const MenuPgLeft = ({ children }: PropsMenuPgLeft) => {
  return (
    <M.MenuContainerPg>
      <M.MenuContainerPgFlexLeft>{children}</M.MenuContainerPgFlexLeft>
    </M.MenuContainerPg>
  );
};
