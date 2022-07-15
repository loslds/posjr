import React from 'react';

import { ContainerButtonImgBg, ButtonsImgBg } from './stylesButtons';

type PropsButtonBg = {
  onClick: () => void;
  img?: string;
  title?: string;
};

export default function ButtonBg({ img, title, onClick }: PropsButtonBg) {
  return (
    <ContainerButtonImgBg>
      <ButtonsImgBg img={img} title={title} onClick={onClick} />
    </ContainerButtonImgBg>
  );
}
