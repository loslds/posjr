import React from 'react';

import * as C from './styles';

type PropsDivRightPrg = {
  children?: React.ReactNode;
  open?: boolean;
};
export const AccesDivRightProgres: React.FC<PropsDivRightPrg> = ({
  children,
  open
}) => {
  return (
    <C.DivForcaFlexRightPrg open={open}>{children}</C.DivForcaFlexRightPrg>
  );
};
