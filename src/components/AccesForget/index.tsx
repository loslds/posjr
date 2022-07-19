import React from 'react';

import * as C from './styles';

type PropsAccesForget = {
  title?: string;
  description?: string;
  img?: string;
  selected: boolean;
  onClick: () => void;
};

export const AccesForget = ({
  title,
  description,
  img,
  selected,
  onClick
}: PropsAccesForget) => {
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
