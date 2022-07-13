import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesView } from '~/components/AccesView';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';
// import olhoa from '../assets/images/olhoa.png';

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
          <h1>Ok... Verifique com atenção sua Informações de Acesso.</h1>
        </Titles>
        <p>Leia atentamente e confirme caso estejam certas sua Identificação abaixo.</p>
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
          <AccesView onClick={() => {}} selected={state.level > 0} title={state.password} />
        </label>
        <button onClick={goto('/homepage')}>Voltar.</button>
        <button onClick={goto('/accespg1')}>Próximo.</button>
      </C.Container>
    </Theme>
  );
};
