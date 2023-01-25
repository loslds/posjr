import React from 'react';

import * as S from './styles';

type PropsSetores = {
  children?: React.ReactNode | JSX.Element;
};
export const Setores = ({ children }: PropsSetores) => {
  return (
    <S.Container>
      <h1>SectorsPg</h1>
      {children}
    </S.Container>
  );
};
