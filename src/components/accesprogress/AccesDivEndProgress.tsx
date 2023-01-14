import React from 'react';

import * as C from './styles';

type PropsDivEndBt = {
  children?: React.ReactNode;
  open?: boolean;
};
export const AccesDivEndButton: React.FC<PropsDivEndBt> = ({
  children,
  open
}) => {
  return <C.DivForcaFlexEndBt open={open}>{children}</C.DivForcaFlexEndBt>;
};
