import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from '../../stylesAcces';

export const CaseAcces1 = () => {
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
      payload: 'CaseAcces1'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'CaseAcces'
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
          <h1>Ok, vamos Resgatar Conta {state.descrlevel} :</h1>
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

        <button onClick={goto('/caseacces')} title={'Retorna Passo : " 0 ".'}>
          Voltar
        </button>

        <button
          onClick={() => {
            alert('ñ exist /caseAcces2');
          }}
          title={'Passo : " 2 ".'}
        >
          {/* goto('/forgotAcces2') */}
          Próximo.
        </button>
      </C.Container>
    </Theme>
  );
};

// dispatch({
//   type: AccesActions.setLevelCase,
//   payload: 0
// });
// dispatch({
//   type: AccesActions.setDescrCase,
//   payload: ''
// });
// dispatch({
//   type: AccesActions.setDescrCasePath,
//   payload: ''
// });
