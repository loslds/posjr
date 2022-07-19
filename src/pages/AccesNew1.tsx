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

  const handlerNameNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setNameNew,
      payload: e.target.value
    });
  };

  const handlerEmailNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setPasswordNew,
      payload: e.target.value
    });
  };
  const handlerFoneNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setFoneNew,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStepNew}/4</p>
        <Titles>
          <h1>Ola {state.idnameNew}, determine seus Contatos.</h1>
        </Titles>
        <p>Complete os Dados requeridos :</p>
        <hr />
        <p>Preencha os Campo abaixo:</p>
        <label>
          Declaração do seu Nome.
          <input
            type="text"
            autoFocus={true}
            onChange={handlerNameNewChange}
            value={state.nameNew}
            placeholder={'Digite seu Nome...'}
          />
        </label>
        <label>
          Desclaração do seu Email.
          <input
            type="text"
            autoFocus
            onChange={handlerEmailNewChange}
            value={state.emailNew}
            placeholder={'Digite seu Email...'}
          />
        </label>
        <label>
          Desclaração do seu n° do Cellular.
          <input
            type="text"
            autoFocus
            onChange={handlerFoneNewChange}
            value={state.foneNew}
            placeholder={'Digite o n° do Celular...'}
          />
        </label>
        <button onClick={goto('/accesnew')} title={'Retorna Passo : " 1 ".'}>
          Voltar
        </button>
        <button onClick={() => {}} title={'Passo : " 3 ".'}>
          {/* goto('/accesnew2') */}
          Próximo.
        </button>
      </C.Container>
    </Theme>
  );
};
