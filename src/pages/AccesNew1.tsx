import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from './stylesAcces';

export const AccesNew1 = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
  const { state, dispatch } = AccesUseForm();

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStepNew,
      payload: 2
    });
  }, [dispatch]);

  const handlerIdNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdnameNew,
      payload: e.target.value
    });
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setPasswordNew,
      payload: e.target.value
    });
  };

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
        <hr />
        <label>
          Descrição ID de Reconhecimento.
          <input
            type="text"
            autoFocus={true}
            onChange={handlerIdNameChange}
            value={state.idname}
            placeholder={'Digite a sua ID...'}
          />
        </label>
        <label>
          Desclare sua PassWord de Acesso.
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
        <button onClick={goto('/accesnew1')} title={'Passo : " 6 ".'}>
          Próximo.
        </button>
      </C.Container>
    </Theme>
  );
};
