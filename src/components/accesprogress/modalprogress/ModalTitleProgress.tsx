import React from 'react';

import * as C from './styles';

type PropsTitleModal = {
  titulo?: string;
};
export const ModalTitleProgress: React.FC<PropsTitleModal> = ({ titulo }) => {
  return (
    <C.ContainerTitleModal>
      <h3>{titulo}</h3>
    </C.ContainerTitleModal>
  );
};
