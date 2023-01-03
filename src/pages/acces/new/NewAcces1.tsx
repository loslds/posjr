import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from '../../stylesAcces';

export const NewAcces1 = () => {
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
      payload: 1
    });
    dispatch({
      type: AccesActions.setPage,
      payload: 'NewAcces1'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'NewAcces'
    });
  }, [dispatch]);

  const handlerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setName,
      payload: e.target.value
    });
  };

  const handlerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setEmail,
      payload: e.target.value
    });
  };
  const handlerFoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setFone,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Ok, uma Nova conta {state.descrlevel} :</h1>
        </Titles>
        <p>Complete os Dados requeridos :</p>
        <hr />
        <p>Preencha os Campo abaixo:</p>

        <label>
          Declaração do seu Nome.
          <input
            type="text"
            autoFocus={true}
            onChange={handlerNameChange}
            value={state.name}
            placeholder={'Digite seu Nome...'}
          />
        </label>
        <label>
          Desclaração do seu Email.
          <input
            type="text"
            autoFocus
            onChange={handlerEmailChange}
            value={state.email}
            placeholder={'Digite seu Email...'}
          />
        </label>
        <label>
          Desclaração do seu n° do Cellular.
          <input
            type="text"
            autoFocus
            onChange={handlerFoneChange}
            value={state.fone}
            placeholder={'Digite o n° do Celular...'}
          />
        </label>

        <button onClick={goto('/newacces')} title={'Retorna Passo : " 0 ".'}>
          Voltar
        </button>

        <button
          onClick={() => {
            alert('ñ exist /newcli2');
          }}
          title={'Passo : " 2 ".'}
        >
          {/* goto('/newcli2') */}
          Próximo.
        </button>
      </C.Container>
    </Theme>
  );
};
