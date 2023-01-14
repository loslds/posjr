import React from 'react';
// import { FaUserAlt } from 'react-icons/fa';

import * as C from './styles';

type PropsAccesOpction = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  ico?: string;
  selected: boolean;
  onClick: () => void;
};

export const AccesOpction = ({
  children,
  title,
  description,
  selected,
  onClick
}: PropsAccesOpction) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Icon>{children}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};
