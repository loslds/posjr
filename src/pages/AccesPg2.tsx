import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormActions, UseForm } from '~/contexts/FormContext';

import { Theme } from '../components/Theme';
import * as C from './styles';

export const AccesPg2 = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state, dispatch } = UseForm();

  const handlerPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setPassword,
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
            <button onClick={goto('/accespage')}>Voltar</button>
            <button onClick={goto('/accespage2')}>Próximo.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
