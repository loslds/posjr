import React from 'react';

import * as C from './styles';

type Props = {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => {};
};

export const MainModal: React.FC<Props> = ({ id, children, onClick }) => {
  return (
    <C.ContentModal id={id} onClick={onClick}>
      <C.ContainerModal>{children}</C.ContainerModal>
    </C.ContentModal>
  );
};
