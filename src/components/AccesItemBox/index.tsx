import React from 'react';

import * as C from './styles';

type PropsAccesBox = {
  title?: string;
  children: React.ReactNode;
};

export const AccesItemBox = ({ title, children }: PropsAccesBox) => {
  return (
    <C.Container>
      <C.ContainerFlex>
        <C.Info>
          <C.Title>{title}</C.Title>
          {children}
        </C.Info>
      </C.ContainerFlex>
    </C.Container>
  );
};
