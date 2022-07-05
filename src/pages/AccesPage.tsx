import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '../components/Theme';
import { UseForm, FormActions } from '../contexts/FormContext';
import * as C from './styles';

export const AccesPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = UseForm();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const handlerIdNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setIdname,
      payload: e.target.value
    });
  };

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: 1/3</p>
          <h1>Vamos começar com sua ID Name.</h1>
          <p>Preencha o Campo abaixo com sua ID.</p>
          <hr />
          <label>
            Descrição ID de Reconhecimento.
            <input type="text" autoFocus={true} onChange={handlerIdNameChange} value={state.idname} placeholder={'ID de reconhecimento...'} />
            <button onClick={goto('/homepage')}>Voltar</button>
            <button onClick={goto('/accespage1')}>Próximo.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
