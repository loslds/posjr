import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesView } from '~/components/AccesView';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import olhoa from '../assets/images/svgs/olhoa.svg';
//import olhoa from '../assets/images/olhoa.png';
import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg3 = () => {
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
      payload: 4
    });
  }, [dispatch]);

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Ok... Verificação do seu Acesso.</h1>
        </Titles>
        <p>Leia atentamente e confirme suas informações abaixo.</p>
        <hr />
        <label>
          Sua Opção para o Acesso do Sistema:
          <input type="text" autoFocus={true} readOnly={true} value={state.descrlevel} />
        </label>
        <label>
          Sua ID de Reconhecimento:
          <input type="text" autoFocus={true} readOnly={true} value={state.idname} />
        </label>
        <label>
          Seu Acesso ao Sistema:
          <AccesView
            img={olhoa}
            onClick={() => {
              alert('visualisa a senha...');
            }}
            selected={true}
            title={state.password}
          />
        </label>
        <button onClick={goto('/accespg2')} title={'Retorna Passo : " 3 ".'}>
          Voltar.
        </button>
        <button onClick={() => {}} title={'Acesso ao Sistema.'}>
          Acessar.
        </button>
      </C.Container>
    </Theme>
  );
};
