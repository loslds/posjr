import React from 'react';

import * as C from './styles';

type PropsDivContain = {
  children?: React.ReactNode;
};
export const AccesDivMain: React.FC<PropsDivContain> = ({ children }) => {
  return <C.DivForcaContainer>{children}</C.DivForcaContainer>;
};
// export default AccesDivMain;
