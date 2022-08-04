import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg2 = () => {
  const [isstrforca, setIsStrForca] = useState(false);
  const [isnrforca, setIsNrForca] = useState(false);

  const [strForca, setStrForca] = useState('');
  const [nrForca, setNrForca] = useState(0);

  const { state, dispatch } = AccesUseForm();

  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 3
    });
  }, [dispatch]);

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strpasswordcharge = e.target.value;
    dispatch({
      type: AccesActions.setPassword,
      payload: strpasswordcharge
    });
  };

  const countForcaPW = useCallback(() => {
    setStrForca(state.password);
    if (strForca.length >= 4 && strForca.length <= 7) {
      setNrForca(nrForca + 10);
    } else if (strForca.length > 7) {
      setNrForca(nrForca + 25);
    }

    if (strForca.length >= 5 && strForca.match(/[a-z] + /)) {
      setNrForca(nrForca + 10);
    }

    if (strForca.length >= 6 && strForca.match(/[A-Z] + /)) {
      setNrForca(nrForca + 20);
    }
    if (strForca.length >= 7 && strForca.match(/[!@#$%&^_|~] + /)) {
      setNrForca(nrForca + 25);
    }
  }, [strForca, nrForca, state.password]);

  useEffect(() => {
    setIsStrForca(true);
    countForcaPW;
    setIsStrForca(false);
  }, [countForcaPW]);

  const getForcaPW = useCallback(() => {
    if (nrForca <= 30) {
      setStrForca('FRACA...');
    }
    if (nrForca >= 30 && nrForca >= 50) {
      setStrForca('MÉDIA...');
    }
    if (nrForca >= 50 && nrForca >= 70) {
      setStrForca('FORTE...');
    }
    if (nrForca >= 70 && nrForca >= 100) {
      setStrForca('EXCELENTE...');
    }
  }, [nrForca]);

  React.useEffect(() => {
    setIsNrForca(true);
    getForcaPW;
    setIsNrForca(false);
  }, [getForcaPW]);

  console.log('strforca: ', strForca);
  console.log('nrforca: ', nrForca);
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
              * Use até 8 caracteres : maiúscula, minuscula, números e simbolos.
            </p>
            <input
              id="psw"
              type="text"
              autoFocus
              maxLength={8}
              onChange={handlerPasswordChange}
              value={state.password}
              placeholder={'Digite a sua Senha...'}
            />
            <div id={'forca'}>
              Força Senha: <span>{nrForca}</span>
            </div>
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
