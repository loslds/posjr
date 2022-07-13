import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg1 = () => {
  // const [emptyEnum, setEmptyEnum] = React.useState(false);

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

  // function handleNextPage() {
  //   if (state.idname !== '') {
  //     setEmptyEnum(true);
  //   } else {
  //     setEmptyEnum(false);
  //   }
  //   if (emptyEnum) {
  //     return goto('accespg2');
  //   }
  //   return null;
  // }

  // const callOnBluer = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   if (e.target.value === '') {
  //     setEmptyEnum(false);
  //     dispatch({ type: AccesActions.setIdname, payload: '' });
  //   } else {
  //     setEmptyEnum(true);
  //   }
  //   console.log('valor de vl', value + ' ' + emptyEnum);
  // };

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: {state.currentStep}/4</p>
          <h1>Agora determine sua ID Name.</h1>
          <p>Preencha o Campo abaixo com sua ID.</p>
          <hr />
          <label>
            Descrição ID de Reconhecimento.
            <input
              name="idnm"
              type="text"
              autoFocus={true}
              onChange={handlerIdNameChange}
              value={state.idname}
              placeholder={'ID de reconhecimento...'}
              // onBlur={callOnBluer}
            />
            <button onClick={goto('/accespg0')}>Voltar</button>
            <button onClick={goto('/accespg2')}>Próximo.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
