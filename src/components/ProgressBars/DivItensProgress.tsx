import React from 'react';

import * as C from './styles';

type PropsDivProgress = {
  children?: React.ReactNode;
  open?: boolean;
};
export const DivsItensProgress: React.FC<PropsDivProgress> = ({
  children,
  open
}) => {
  return (
    <C.ContainerDivProgres open={open}>
      <C.ContainerDivProgresMain>{children}</C.ContainerDivProgresMain>
    </C.ContainerDivProgres>
  );
};
