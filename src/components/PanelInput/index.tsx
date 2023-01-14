import React, { ReactNode } from 'react';

import * as C from './styles';

type PropsPanelInput = {
  children?: ReactNode;
};
export const PanelInput = ({ children }: PropsPanelInput) => {
  return <C.ContainerInput>{children}</C.ContainerInput>;
};
