import React from 'react';

import { ContainerButtonCircleImgBg, ButtonsCirclesBg } from './stylesButtons';

type PropsIBoxBg = {
  id?: string;
  onClick: () => void;
  img?: string;
  title?: string;
};
export default function ButtonsCircleBg({
  id,
  img,
  title,
  onClick
}: PropsIBoxBg) {
  return (
    <ContainerButtonCircleImgBg>
      <ButtonsCirclesBg id={id} img={img} title={title} onClick={onClick} />
    </ContainerButtonCircleImgBg>
  );
}
