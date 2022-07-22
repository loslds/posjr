import React from 'react';

import {
  ContainerButtonItemBoxImgBg,
  ButtonsItBoxImgBg
} from './stylesButtons';

type PropsButtonItemBoxBg = {
  id?: string;
  onClick: () => void;

  title?: string;
};

export default function ButtonItemBoxBg({
  id,

  title,
  onClick
}: PropsButtonItemBoxBg) {
  return (
    <ContainerButtonItemBoxImgBg>
      <ButtonsItBoxImgBg id={id} title={title} onClick={onClick} />
    </ContainerButtonItemBoxImgBg>
  );
}
