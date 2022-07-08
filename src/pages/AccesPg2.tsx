import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg2 = () => {
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

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setPassword,
      payload: e.target.value
    });
  };

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: 2/3 </p>
          <h1>Ola {state.idname}... Agora determine sua Password.</h1>
          <p>Preencha o Campo abaixo com seu Acesso.</p>
          <hr />
          <label>
            Desclaração de sya PassWord de Acesso.
            <input type="text" autoFocus onChange={handlerPasswordChange} value={state.password} placeholder={'Senha de Acesso...'} />
            <button onClick={goto('/accespg1')}>Voltar</button>
            <button onClick={goto('/accespg3')}>Próximo.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
