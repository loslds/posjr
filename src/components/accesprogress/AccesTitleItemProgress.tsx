import React from 'react';

import * as C from './styles';

type PropsItem = {
  nome?: string;
  color: string;
};
export const AccesTitleItemProgress: React.FC<PropsItem> = ({
  nome,
  color
}) => {
  return (
    <C.TitleItemProgress color={color}>
      <h3>{nome}</h3>
    </C.TitleItemProgress>
  );
};
