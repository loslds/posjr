import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <p>Acesso a Rede do Sistema. </p>
        <Titles>
          <h1>Acesso ao Sistema INTERNO.</h1>
        </Titles>
        <p>Determime sua ID e Senha de Acesso abaixo.</p>
        <hr />
        <button onClick={goto('/accespg0')} title={'Retorna Passo : " 0 ".'}>
          Voltar.
        </button>
        <button
          onClick={() => {
            alert('pag. com menu.');
          }}
          title={'Acesso ao Sistema.'}
        >
          Acessar.
        </button>
      </C.Container>
    </Theme>
  );
};
