import React from 'react';

import * as C from './styles';

type PropsDivProgres = {
  children?: React.ReactNode;
};
export const AccesDivProgress: React.FC<PropsDivProgres> = ({ children }) => {
  return <C.DivForca>{children}</C.DivForca>;
};
