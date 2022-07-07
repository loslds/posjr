import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesOpction } from '~/components/AccesOpction';
import { Titles } from '~/components/Titles';
import { FormActions, UseForm } from '~/contexts/FormContext';

import closeverm from '../assets/images/closeverm.png';
import { Theme } from '../components/Theme';
import * as C from './styles';

export const AccesPg0 = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state, dispatch } = UseForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, [dispatch]);

  return (
    <Theme>
      <C.Container>
        <p>Passo: 1/3</p>
        <Titles>
          <h1>Vamos começar... Qual acesso você deseja ?</h1>
        </Titles>
        <p>Selecione uma opção para o acesso.</p>
        <hr />
        <label>Determine uma Opção :</label>
        <AccesOpction title=" Acesso Internet." description={'Usuário Cliênte.'} img={closeverm} selected={state.level === 0} />
        <AccesOpction title="Acesso Local." description={'Usuário Funcionário.'} img={closeverm} selected={state.level === 1} />
        <button onClick={goto('/accespage1')}>Próximo.</button>
      </C.Container>
    </Theme>
  );
};
