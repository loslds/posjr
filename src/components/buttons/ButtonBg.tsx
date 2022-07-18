import React from 'react';

import { ContainerButtonImgBg, ButtonsImgBg } from './stylesButtons';

type PropsButtonBg = {
  onClick: () => void;
  img?: string;
  title?: string;
  open?: boolean;
};

export default function ButtonBg({ img, title, onClick, open }: PropsButtonBg) {
  return (
    <ContainerButtonImgBg open={open}>
      <ButtonsImgBg img={img} title={title} onClick={onClick} />
    </ContainerButtonImgBg>
  );
}
