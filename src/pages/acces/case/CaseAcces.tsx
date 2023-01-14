import React from 'react';
// import { MdSendToMobile, MdKeyboardAlt, MdMail } from 'react-icons/md';
import { FaMobileAlt, FaLockOpen, FaMailBulk } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { AccesOpction } from '~/components/AccesOpction';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from '../../stylesAcces';

export const CaseAcces = () => {
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
      payload: 0
    });
    dispatch({
      type: AccesActions.setLevel,
      payload: 0
    });
    dispatch({
      type: AccesActions.setDescrlevel,
      payload: ''
    });
    dispatch({
      type: AccesActions.setLevelCase,
      payload: 0
    });
    dispatch({
      type: AccesActions.setDescrCase,
      payload: ''
    });
    dispatch({
      type: AccesActions.setDescrCasePath,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvName,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvPin,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvMail,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvSms,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvCpf,
      payload: ''
    });
    dispatch({
      type: AccesActions.setPage,
      payload: 'CaseAcces'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'CaseAcces'
    });
  }, [dispatch]);

  const Descrcase = ['', 'Acesso Pin', 'Acesso SMS.', 'Acesso EMAIL.'];
  const DescrPath = ['', '/pinacces1', '/smsacces1', '/mailacces1'];
  const setLevel = (level: number) => {
    dispatch({
      type: AccesActions.setLevelCase,
      payload: level
    });
    dispatch({
      type: AccesActions.setDescrCase,
      payload: Descrcase[level]
    });
    dispatch({
      type: AccesActions.setDescrCasePath,
      payload: DescrPath[level]
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Qual Acesso deseja o Utilizar ?</h1>
        </Titles>
        <p>Vamos começar...Para qual acesso deseja ?</p>
        <hr />
        <AccesOpction
          title=" acessar P I N "
          description={'Acessar Meu PIN.'}
          selected={state.levelcase === 1}
          onClick={() => setLevel(1)}
        >
          {state.levelcase === 1 ? (
            <FaLockOpen color="#fcf226" />
          ) : (
            <FaLockOpen color="#fff" />
          )}
        </AccesOpction>
        <AccesOpction
          title="Acessar S M S."
          description={'Acesso Celular.'}
          selected={state.levelcase === 2}
          onClick={() => setLevel(2)}
        >
          {state.levelcase === 2 ? (
            <FaMobileAlt color="#fcf226" />
          ) : (
            <FaMobileAlt color="#fff" />
          )}
        </AccesOpction>
        <AccesOpction
          title="Acessar E-MAIL."
          description={'Acesso Email.'}
          selected={state.levelcase === 3}
          onClick={() => setLevel(3)}
        >
          {state.levelcase === 3 ? (
            <FaMailBulk color="#fcf226" />
          ) : (
            <FaMailBulk color="#fff" />
          )}
        </AccesOpction>

        <button onClick={goto('/access')} title={'Retorna...'}>
          Voltar
        </button>

        {state.levelcase > 0 ? (
          <button onClick={goto('/casechanger')} title={'Passo : " 1 ".'}>
            Próximo.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};

/*
    <C.ContainerCase>
      <C.ContainerArea>
        <label>Com Segurança:</label>
        <p>Passo: {state.currentStep}/4</p>
        <C.ButtonCase onClick={goto('/casepin')} title={'Acessar com PIN...'}>
          Code PIN.
          <span>
            <MdKeyboardAlt />
          </span>
        </C.ButtonCase>
        <C.ButtonCase onClick={goto('/casesms')} title={'Acessar com SMS...'}>
          Code SMS.
          <span>
            <MdSendToMobile />
          </span>
        </C.ButtonCase>
        <C.ButtonCase
          onClick={goto('/caseemail')}
          title={'Acessar com EMAIL...'}
        >
          Code EMAIL.
          <span>
            <MdMail />
          </span>
        </C.ButtonCase>
      </C.ContainerArea>
    </C.ContainerCase>
  */
