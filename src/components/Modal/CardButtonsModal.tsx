import React from 'react';

import * as C from './styles';

type Props = {
  id?: string;
  children?: React.ReactNode /*JSX.Element;*/;
};

export const CardButtonsModal: React.FC<Props> = ({ id, children }) => {
  return <C.ContainerButtonModal id={id}>{children}</C.ContainerButtonModal>;
};
