import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg1 = () => {
  const [emptyEnum, setEmptyEnum] = React.useState(false);

  const navigate = useNavigate();
  const { state, dispatch } = AccesUseForm();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 1
    });
  }, [dispatch]);

  function UpdateStates() {
    if (state.idname !== '') {
      setEmptyEnum(true);
    } else {
      setEmptyEnum(false);
    }
  }

  const handlerIdNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdname,
      payload: e.target.value
    });
    UpdateStates();
  };

  const callOnBluer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!emptyEnum && value !== '') {
      dispatch({
        type: AccesActions.setIdname,
        payload: ''
      });
    }
  };

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: 1/3</p>
          <h1>Agora determine sua ID Name.</h1>
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
            <button onClick={goto('/accespg0')}>Voltar</button>
            <button onClick={goto('/accespg2')}>Próximo.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
