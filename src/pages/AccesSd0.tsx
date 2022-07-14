import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import * as C from './stylesAcces';

export const AccesSb0 = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <Theme>
      <C.Container>
        <p>Em que posso te ajudar?</p>
        <button onClick={goto('/homepage')}>Voltar.</button>
        <Titles>
          <h1>Opções :</h1>
        </Titles>
        <p>Selecione uma opção para o acesso.</p>
        <hr />
        <label>É so Escolher...:</label>
      </C.Container>
    </Theme>
  );
};
