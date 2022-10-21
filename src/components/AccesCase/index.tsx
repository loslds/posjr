import React from 'react';

import { Titles } from '../Titles';
import * as C from './styles';

export const AccesCase = () => {
  return (
    <C.Container>
      <Titles>
        <h1>Opções</h1>
      </Titles>
      <C.ContainerArea>
        <C.ContainerEnd>
          <p>ContainerArea</p>
        </C.ContainerEnd>
      </C.ContainerArea>
    </C.Container>
  );
};
