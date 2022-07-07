import React from 'react';

import * as C from './styles';
type Props = {
  title: string;
  description: string;
  img?: string;
  selected: boolean;
};
export const AccesOpction = ({ title, description, img, selected }: Props) => {
  return (
    <C.Container selected={selected}>
      <C.Icon>
        <div>{img}</div>
      </C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};
