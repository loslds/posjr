import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesUseForm } from '~/contexts/AccesContext';

import * as C from './stylesAcces';

export const AccesFone = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state } = AccesUseForm();

  return (
    <Theme>
      <C.Container>
        <p>Acessoao envio de menssagem Segura.</p>
        <Titles>
          <h1>Confirme o Envio via Celular.</h1>
        </Titles>
        <p>Celular conforme Cadastro :</p>
        <hr />
        <label>Celular de nº :</label>
        <Titles>
          <h3>{state.fone}</h3>
        </Titles>
        <button
          onClick={goto('/accesfgt')}
          title={'Volta ao Forget : "Opção".'}
        >
          Voltar.
        </button>
        {state.level >= 1 ? (
          <button
            onClick={() => {
              alert('chama função para enviar codido.');
            }}
            title={'Enviar...'}
          >
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
