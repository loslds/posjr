import React from 'react';

import * as C from './styles';

type PropsDivContain = {
  children?: React.ReactNode;
  open?: boolean;
};
export const AccesDivMain: React.FC<PropsDivContain> = ({ children, open }) => {
  return <C.DivForcaContainer open={open}>{children}</C.DivForcaContainer>;
};
// export default AccesDivMain;
