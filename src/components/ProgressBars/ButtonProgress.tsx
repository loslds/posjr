import React from 'react';

import * as C from './styles';
type PropsBtInfo = {
  id?: string;
  img?: string;
  titulo?: string;
  //onClick?: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonProgress: React.FC<PropsBtInfo> = ({
  id,
  img,
  titulo,
  onClick
}) => {
  return (
    <C.ButtonDivPresImg id={id} img={img} title={titulo} onClick={onClick} />
  );
};
