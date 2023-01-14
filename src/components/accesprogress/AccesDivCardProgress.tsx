import React from 'react';

import * as C from './styles';

type PropsDivCard = {
  children?: React.ReactNode;
};
export const AccesDivCardProgress: React.FC<PropsDivCard> = ({ children }) => {
  return <C.DivForcaCard>{children}</C.DivForcaCard>;
};
