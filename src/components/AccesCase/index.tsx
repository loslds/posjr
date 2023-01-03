import React from 'react';
import { MdSendToMobile, MdKeyboardAlt, MdMail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from './styles';

export const AccesCase = () => {
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
      type: AccesActions.setPage,
      payload: 'Access'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'Access'
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
  }, [dispatch]);

  const Descrcase = ['', 'Acesso PIN.', 'Acesso EMS.', 'Acesso EMAIL.'];
  const DescrcasePath = ['', '/caseacces', '/caseacces', '/caseacces'];
  const pagePath = '/caseacces';
  const setCase = (level: number) => {
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
      payload: DescrcasePath[level]
    });
  };

  React.useEffect(() => {
    goto(pagePath);
  });

  return (
    <C.ContainerCase>
      <C.ContainerArea>
        <label>Com Segurança {state.currentStep}:</label>
        <C.ButtonCase onClick={() => setCase(1)}>
          Code PIN.
          <span>
            <MdKeyboardAlt />
          </span>
        </C.ButtonCase>
        <C.ButtonCase onClick={() => setCase(2)}>
          Code SMS.
          <span>
            <MdSendToMobile />
          </span>
        </C.ButtonCase>
        <C.ButtonCase onClick={() => setCase(3)}>
          Code EMAIL.
          <span>
            <MdMail />
          </span>
        </C.ButtonCase>
      </C.ContainerArea>
    </C.ContainerCase>
  );
};
