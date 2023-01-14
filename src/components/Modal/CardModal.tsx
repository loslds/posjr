import React from 'react';

import * as C from './styles';

type Props = {
  id?: string;
  children?: React.ReactNode;
};

export const CardModal: React.FC<Props> = ({ id, children }) => {
  return (
    <C.ContainerCard id={id}>
      <C.ContainerCardFlex>{children}</C.ContainerCardFlex>
    </C.ContainerCard>
  );
};
