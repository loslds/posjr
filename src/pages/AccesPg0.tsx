import React from 'react';
import { FaUserAlt, FaNetworkWired } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { AccesOpction } from '~/components/AccesOpction';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

// import closevrm from '../assets/images/svgs/profile.svg';
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
  const DescrPath = ['', '/accespg1', '/accesfunc'];
  const setLevel = (level: number) => {
    dispatch({
      type: AccesActions.setLevel,
      payload: level
    });
    dispatch({
      type: AccesActions.setDescrlevel,
      payload: DescrLevel[level]
    });
    dispatch({
      type: AccesActions.setDescrpath,
      payload: DescrPath[level]
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Vamos começar... Para qual acesso deseja ?</h1>
        </Titles>
        <p>Selecione uma opção para o acesso.</p>
        <hr />
        <label>Determine uma Opção : {state.descrpath}</label>
        <AccesOpction
          title=" Acesso Internet."
          description={'Usuário Cliênte.'}
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        >
          <FaNetworkWired color="#fff" />
        </AccesOpction>
        <AccesOpction
          title="Acesso Local."
          description={'Usuário Funcionário.'}
          selected={state.level === 2}
          onClick={() => setLevel(2)}
        >
          <FaUserAlt color="#fff" />
        </AccesOpction>
        {state.level >= 1 ? (
          <button onClick={goto(state.descrpath)} title={'Passo : " 2 ".'}>
            Próximo.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
//           </button>/<button onClick={() => caminho(state.level)} title={'Passo : " 2 ".'}>
