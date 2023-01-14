import React from 'react';

import * as C from './styles';

type Props = {
  id?: string;
  conteudo?: JSX.Element;
  children?: React.ReactNode /*JSX.Element;*/;
};

export const DivHelpProgress: React.FC<Props> = ({
  id,
  conteudo,
  children
}) => {
  return (
    <C.ContainerPanelMain id={id}>
      <C.ContainerPanelMainFlex>
        <h2>{conteudo}</h2>
        {children}
      </C.ContainerPanelMainFlex>
    </C.ContainerPanelMain>
  );
};
