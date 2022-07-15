import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg1 = () => {
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
      payload: 2
    });
  }, [dispatch]);

  const handlerIdNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdname,
      payload: e.target.value
    });
  };

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: {state.currentStep}/4</p>
          <Titles>
            <h1>Agora determine sua ID Name.</h1>
          </Titles>
          <p>Preencha o Campo abaixo com sua ID.</p>
          <hr />
          <label>
            Descrição ID de Reconhecimento.
            <input
              type="text"
              autoFocus={true}
              onChange={handlerIdNameChange}
              value={state.idname}
              placeholder={'ID de reconhecimento...'}
            />
            <button
              onClick={goto('/accespg0')}
              title={'Retorna Passo : " 1 ".'}
            >
              Voltar
            </button>
            <button onClick={goto('/accespg2')} title={'Passo : " 3 ".'}>
              Próximo.
            </button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
