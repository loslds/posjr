import React from 'react';

import * as C from './styles';

type Props = {
  img?: string;
  title?: string;
  // onClick?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ButtonModal: React.FC<Props> = ({ img, onClick, title }) => {
  return <C.ButtonModalImg img={img} onClick={onClick} title={title} />;
};
