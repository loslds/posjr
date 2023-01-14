import React from 'react';

import * as C from './styles';

type PropsDivLeftBt = {
  children?: React.ReactNode;
  open?: boolean;
};
export const AccesDivLeftButton: React.FC<PropsDivLeftBt> = ({
  children,
  open
}) => {
  return <C.DivForcaFlexLeftBt open={open}>{children}</C.DivForcaFlexLeftBt>;
};
