import React from 'react';

import * as C from './styles';

type PropsAccesBox = {
  title?: string;
  description?: string;
  img?: string;
  selected: boolean;
  onClick: () => void;
};

export const AccesBox = ({
  title,
  description,
  img,
  selected,
  onClick
}: PropsAccesBox) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Info>
        <C.Title>{title}</C.Title>
      </C.Info>
      <C.Img>{img}</C.Img>
    </C.Container>
  );
};
