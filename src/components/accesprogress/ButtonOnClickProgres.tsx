import React from 'react';

import { ButtonClickPresImg } from '../buttons/stylesButtons';

type Props = {
  id?: string;
  title?: string;
  img?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ButtonOnClickProgres: React.FC<Props> = ({
  id,
  title,
  img,
  onClick
}) => {
  return (
    <ButtonClickPresImg id={id} title={title} img={img} onClick={onClick} />
  );
};
// default ButtonOnClickProgres;
