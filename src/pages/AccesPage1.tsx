import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormProvider } from '~/contexts/FormContext';

import { Theme } from '../components/Theme';
import { Useform, FormActions } from '../contexts/FormContext';
import * as C from '../pages/styles';

export const AccesPage1 = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state, dispatch } = Useform();

  const handlerIdNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setIdname,
      payload: e.target.value
    });
  };
  return (
    <div>
      <Theme>
        <FormProvider>
          <C.Container>
            <p>Passo: 2/3 </p>
            <h1>Vamos começar com sua ID Name.</h1>
            <p>Preencha o Campo abaixo com sua ID.</p>
            <hr />
            <label>
              Descrição ID de Reconhecimento.
              <input type="text" autoFocus onChange={handlerIdNameChange}></input>
              <button onClick={goto('/homepage')}>Voltar</button>
              <button onClick={goto('/accespage1')}>Próximo.</button>
            </label>
          </C.Container>
        </FormProvider>
      </Theme>
    </div>
  );
};
