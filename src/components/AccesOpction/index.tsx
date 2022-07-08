import React from 'react';

import * as C from './styles';

type PropsAccesOpction = {
  title?: string;
  description?: string;
  img?: string;
  selected: boolean;
  onClick: () => void;
};

export const AccesOpction = ({ title, description, img, selected, onClick }: PropsAccesOpction) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Icon>{img}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};
