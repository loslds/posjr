import React from 'react';

import * as C from './styles';

type PropsAccesView = {
  title?: string;
  description?: string;
  img?: string;
  selected: boolean;
  onClick: () => void;
};

export const AccesView = ({ title, description, img, selected, onClick }: PropsAccesView) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Img>{img}</C.Img>
      <C.Info>
        <C.Description>{description}</C.Description>
        <C.Title>{title}</C.Title>
      </C.Info>
    </C.Container>
  );
};
