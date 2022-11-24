import React from 'react';

import { constants } from 'fs';

import { ButtonClickPresImg } from './stylesButtons';

type Props = {
  id?: string;
  title?: string;
  img?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonOnClickProgres: React.FC<Props> = ({ id, title, img, onClick }) => {
  return (
    <ButtonClickPresImg id={id} title={title} img={img} onClick={onClick} />
  );
};
export default ButtonOnClickProgres;
