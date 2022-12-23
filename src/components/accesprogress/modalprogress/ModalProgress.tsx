import React from 'react';

import { ModalTargeta } from './ModalTargeta';
import * as C from './styles';

type PropsContentModal = {
  titulo?: string;
  children?: React.ReactNode;
};
export const ModalProgress: React.FC<PropsContentModal> = ({
  titulo,
  children
}) => {
  return (
    <C.ContentModal>
      <C.ContainerModal>
        <ModalTargeta titulo={titulo} />
        {children}
      </C.ContainerModal>
    </C.ContentModal>
  );
};
