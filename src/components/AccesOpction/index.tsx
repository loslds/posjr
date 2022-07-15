import React from 'react';

import * as C from './styles';

type PropsAccesOpction = {
  title?: string;
  description?: string;
  ico?: string;
  selected: boolean;
  onClick: () => void;
};

export const AccesOpction = ({
  title,
  description,
  ico,
  selected,
  onClick
}: PropsAccesOpction) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Icon>{ico}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};
