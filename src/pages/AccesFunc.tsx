import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesFunc = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state, dispatch } = AccesUseForm();
  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 4
    });
  }, [dispatch]);

  return (
    <Theme>
      <C.Container>
        <p>Acesso a Rede do Sistema. </p>
        <Titles>
          <h1>Acesso ao Sistema INTERNO.</h1>
        </Titles>
        <p>Determime sua ID e Senha de Acesso abaixo.</p>
        <hr />
        <label>Determine uma Opção : {state.descrpath}</label>
        <button onClick={goto('/accespg0')} title={'Retorna Passo : " 0 ".'}>
          Voltar1.
        </button>
        <button onClick={() => {}} title={'Acesso ao Sistema1.'}>
          Acessar1.
        </button>
      </C.Container>
    </Theme>
  );
};
