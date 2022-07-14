import React from 'react';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import * as C from './stylesAcces';

export const AccesNew = () => {
  return (
    <Theme>
      <C.Container>
        <p>Você se encontra pronto para criar a sua conta.</p>
        <Titles>
          <h1>Criação de uma Nova Conta ?</h1>
        </Titles>
        <p>Complete os Dados requeridos :</p>
        <hr />
        <label>Nova Conta :</label>
      </C.Container>
    </Theme>
  );
};
