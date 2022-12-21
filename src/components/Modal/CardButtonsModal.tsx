import React from 'react';

import * as C from './styles';

type Props = {
  id?: string;
  children?: JSX.Element;
  isbtof?: boolean;
};

export const CardButtonsModal: React.FC<Props> = ({ id, isbtof, children }) => {
  return (
    <C.ContainerButtonModal id={id} isbtof={isbtof}>
      {children}
    </C.ContainerButtonModal>
  );
};
