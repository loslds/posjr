import React from 'react';

import { ContainerButtonImgBg, ButtonsImgBg } from './stylesButtons';

type Props = {
  id?: string;
  onClick: () => void;
  img?: string;
  title?: string;
};

const ButtonBg: React.FC<Props> = ({ id, title, img, onClick }) => {
  return (
    <ContainerButtonImgBg>
      <ButtonsImgBg id={id} img={img} title={title} onClick={onClick} />
    </ContainerButtonImgBg>
  );
};
export default ButtonBg;
