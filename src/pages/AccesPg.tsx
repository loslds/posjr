import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from './stylesAcces';

export const AccesPg = () => {
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
      payload: 0
    });
  }, [dispatch]);

  const handlerIdNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdname,
      payload: e.target.value
    });
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setPassword,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}</p>
        <Titles>
          <h2>Solicitação do Acesso.</h2>
        </Titles>
        <p>Complete os Dados requeridos :</p>
        <hr />
        <label>
          ID para Reconhecimento.
          <input
            type="text"
            autoFocus={true}
            onChange={handlerIdNameChange}
            value={state.idname}
            placeholder={'Digite a sua ID...'}
          />
        </label>
        <label>
          PASSWORD para Acesso.
          <input
            type="text"
            autoFocus
            onChange={handlerPasswordChange}
            value={state.password}
            placeholder={'Digite a sua Senha...'}
          />
        </label>
        <button onClick={goto('/homepage')} title={'Retorna p/ Home.'}>
          Voltar
        </button>
        {state.idname !== '' && state.password !== '' ? (
          <button onClick={() => {}} title={'Solicitar Acesso.'}>
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
