import React from 'react';

import { ModalButtonProgress } from './ModalButtonProgress';
import { ModalCardProgress } from './ModalCardProgress';
import { ModalTitleProgress } from './ModalTitleProgress';
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
        <ModalCardProgress>
          <ModalTitleProgress titulo={titulo} />
          <ModalButtonProgress />
        </ModalCardProgress>
        {children}
      </C.ContainerModal>
    </C.ContentModal>
  );
};
