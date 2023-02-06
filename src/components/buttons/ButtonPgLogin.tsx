import React from 'react';

import { ButtonLoginPg } from './stylesButtons';

type Props = {
  img?: string;
  title?: string;
};
const ButtonPgLogin: React.FC<Props> = ({ img, title }) => {
  return <ButtonLoginPg img={img} title={title} />;
};
export default ButtonPgLogin;
