import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from './stylesAcces';

export const AccesNew = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
  const { state, dispatch } = AccesUseForm();

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setcurrentStepContact,
      payload: 1
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
        <p>Passo: {state.currentStepContact}/4</p>
        <Titles>
          <h1>Criação de uma Nova Conta ?</h1>
        </Titles>
        <p>Complete os Dados requeridos :</p>
        <hr />
        <label>Nova Conta :</label>
        <hr />
        <label>
          ID de Reconhecimento.
          <input
            type="text"
            autoFocus={true}
            onChange={handlerIdNameChange}
            value={state.idname}
            placeholder={'Digite a sua ID...'}
          />
        </label>
        <label>
          PassWord para Acesso.
          <input
            type="text"
            autoFocus
            onChange={handlerPasswordChange}
            value={state.password}
            placeholder={'Digite a sua Senha...'}
          />
        </label>
        <button onClick={goto('/acceshome')} title={'Retorna Passo : " 0 ".'}>
          Voltar
        </button>
        <button onClick={goto('/accesnew1')} title={'Passo : " 2 ".'}>
          Próximo.
        </button>
      </C.Container>
    </Theme>
  );
};
