import React from 'react';

import * as C from './styles';

type PropsMainModal = {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const MainModal: React.FC<PropsMainModal> = ({ id, children }) => {
  return (
    <C.Content id={id}>
      <C.ContainerModal>{children}</C.ContainerModal>
    </C.Content>
  );
};
