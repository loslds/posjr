import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { ButtonsCirclesBg } from '~/components/buttons/stylesButtons';
import { Titles } from '~/components/Titles';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg4 = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
  return (
    <Theme>
      <C.Container>
        <p>Acesso a Rede do Sistema Interno. </p>
        <Titles>
          <h1>Acesso ao Sistema.</h1>
        </Titles>
        <p>Determime sua ID e Senha de Acesso abaixo.</p>
        <hr />
        <button onClick={goto('/accespg5')} title={'Retorna Passo : " 0 ".'}>
          Voltar.
        </button>
        <button onClick={() => {}} title={'Acesso ao Sistema.'}>
          Acessar.
        </button>
      </C.Container>
    </Theme>
  );
};
