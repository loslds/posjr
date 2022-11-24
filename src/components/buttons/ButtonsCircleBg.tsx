import React from 'react';

import { ContainerButtonCircleImgBg, ButtonsCirclesBg } from './stylesButtons';

type Props = {
  id?: string;
  img?: string;
  title?: string;
  opcao?: string;
  onClick: () => void;
};
const ButtonsCircleBg: React.FC<Props> = ({ id, title, img, onClick }) => {
  return (
    <ContainerButtonCircleImgBg>
      <ButtonsCirclesBg id={id} img={img} title={title} onClick={onClick} />
    </ContainerButtonCircleImgBg>
  );
};
export default ButtonsCircleBg;
