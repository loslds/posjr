import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';
type PropsAccesPg2 = { testsnh?: string };

export const AccesPg2 = ({ testsnh }: PropsAccesPg2) => {
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
      payload: 3
    });
  }, [dispatch]);

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    dispatch({
      type: AccesActions.setPassword,
      payload: valor
    });
  };

  function ValidarForcaSenha() {
    var strforca = state.password;
    var nrlength = strforca.length;
    var substr = strforca[nrlength - 1];
    console.log('strforca : ', strforca);
    console.log('nrlength : ', nrlength);
    console.log('substr   : ', substr);
    return 'false';
  }

  const handlerValidarSenha = () => {
    testsnh = ValidarForcaSenha();
  };

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: {state.currentStep}/4 </p>
          <Titles>
            <h1>Ola {state.idname}, determine sua Password.</h1>
          </Titles>
          <p>Preencha o Campo abaixo com seu Acesso.</p>
          <hr />
          <label>
            Desclare sua PassWord de Acesso.
            <p>
              * Use até 8 caracteres ( maiúscula, minuscula, números e simbolos
              ).
            </p>
            <input
              id="psw"
              type="text"
              autoFocus
              maxLength={8}
              onChange={handlerPasswordChange}
              value={state.password}
              placeholder={'Digite a sua Senha...'}
              onKeyUp={handlerValidarSenha}
            />
            <p>Força Senha:</p>
            <h5>{testsnh}</h5>
          </label>

          <button onClick={goto('/accespg1')} title={'Retorna Passo : " 2 ".'}>
            Voltar
          </button>
          {state.password !== '' ? (
            <button onClick={goto('/accespg3')} title={'Passo : " 4 ".'}>
              Próximo.
            </button>
          ) : null}
        </C.Container>
      </Theme>
    </div>
  );
};
