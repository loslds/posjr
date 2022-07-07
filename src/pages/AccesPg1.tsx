import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '../components/Theme';
import { UseForm, FormActions } from '../contexts/FormContext';
import * as C from './styles';

export const AccesPg1 = () => {
  const [emptyEnum, setEmptyEnum] = useState(false);

  const navigate = useNavigate();
  const { state, dispatch } = UseForm();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  }, [dispatch]);

  function UpdateStates() {
    if (state.idname !== '') {
      setEmptyEnum(true);
    } else {
      setEmptyEnum(false);
    }
  }

  const handlerIdNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setIdname,
      payload: e.target.value
    });
    UpdateStates();
  };

  const callOnBluer = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!emptyEnum && value !== '') {
      dispatch({
        type: FormActions.setIdname,
        payload: ''
      });
    }
  };

  // const handlerCallPage = () => {
  //   if (state.idname !== '') {
  //     goto('/accespage1');
  //   } else {
  //     alert('Precisa concluir requisitos solicitados...');
  //   }
  // };

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
            <input
              type="text"
              autoFocus={true}
              onChange={handlerIdNameChange}
              value={state.idname}
              placeholder={'ID de reconhecimento...'}
              onBlur={callOnBluer}
            />
            <button onClick={goto('/homePage')}>Voltar</button>
            <button onClick={goto('/accespage1')}>Próximo.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
