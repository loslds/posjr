import React from 'react';

import * as C from './styles';

type PropsMainCol = {
  children?: React.ReactNode;
  width?: string;
};
export const ProgressMainCol: React.FC<PropsMainCol> = ({
  children,
  width
}) => {
  return (
    <C.ContainerBarFlexCol width={width}>{children}</C.ContainerBarFlexCol>
  );
};
