import React, { ReactNode } from 'react';

import {
  ContainerPW,
  ContainerPWFlex,
  ContainerPWCard
} from '../../pages/stylesAcces';

type PropsPnlVwInp = {
  children?: ReactNode | JSX.Element;
};
const PanelViewInputs = ({ children }: PropsPnlVwInp) => {
  return (
    <ContainerPW>
      <ContainerPWFlex>
        <ContainerPWCard>{children}</ContainerPWCard>
      </ContainerPWFlex>
    </ContainerPW>
  );
};
export default PanelViewInputs;
