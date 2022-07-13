import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesOpction } from '~/components/AccesOpction';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

// import closeverm1 from '../assets/images/closeverm1.png';
import * as C from './stylesAcces';

export const AccesPg0 = () => {
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
  }, [dispatch]);

  const DescrLevel = ['', 'Usuário Cliênte', 'Usuário Funcioário.'];
  const setLevel = (level: number) => {
    dispatch({
      type: AccesActions.setLevel,
      payload: level
    });
    dispatch({
      type: AccesActions.setDescrlevel,
      payload: DescrLevel[level]
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Vamos começar... Qual acesso você deseja ?</h1>
        </Titles>
        <p>Selecione uma opção para o acesso.</p>
        <hr />
        <label>Determine uma Opção :</label>
        <AccesOpction title=" Acesso Internet." description={'Usuário Cliênte.'} selected={state.level === 1} onClick={() => setLevel(1)} />
        <AccesOpction title="Acesso Local." description={'Usuário Funcionário.'} selected={state.level === 2} onClick={() => setLevel(2)} />
        <button onClick={goto('/homepage')}>Voltar.</button>
        <button onClick={goto('/accespg1')}>Próximo.</button>
      </C.Container>
    </Theme>
  );
};
