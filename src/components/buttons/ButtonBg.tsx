import React from 'react';

import { ContainerButtonImgBg, ButtonsImgBg } from './stylesButtons';

type PropsButtonBg = {
  id: string;
  onClick: () => void;
  img?: string;
  title?: string;
};

export default function ButtonBg({ id, img, title, onClick }: PropsButtonBg) {
  return (
    <ContainerButtonImgBg>
      <ButtonsImgBg id={id} img={img} title={title} onClick={onClick} />
    </ContainerButtonImgBg>
  );
}
