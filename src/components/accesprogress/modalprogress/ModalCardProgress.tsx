import React from 'react';

import * as C from './styles';

type PropsModalCard = {
  children?: React.ReactNode;
};
export const ModalCardProgress: React.FC<PropsModalCard> = ({ children }) => {
  return <C.ContainerCarModal>{children}</C.ContainerCarModal>;
};
