import React from 'react';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import * as C from './stylesAcces';

export const AccesEmail = () => {
  return (
    <Theme>
      <C.Container>
        <p>Agora é só confirmar seu email.</p>
        <Titles>
          <h1>determine seu email</h1>
        </Titles>
        <p>Complete os Dados requeridos :</p>
        <hr />
        <label>Nova Conta :</label>
      </C.Container>
    </Theme>
  );
};
