import React from 'react';

import * as C from './styles';

type PropsDivCenter = {
  children?: React.ReactNode;
  open?: boolean;
};
export const AccesDivCenterProgress: React.FC<PropsDivCenter> = ({
  children,
  open
}) => {
  return (
    <C.DivForcaFlexCenterPrg open={open}>{children}</C.DivForcaFlexCenterPrg>
  );
};
