import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from '../../stylesAcces';

export const MailAcces1 = () => {
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
      payload: 'MailAcces1'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'CaseAcces'
    });
  }, [dispatch]);

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Determine valores para {state.descrcase}</h1>
        </Titles>
        <p>Determine valores para o processamento.</p>
        <hr />

        <button onClick={goto('/caseacces')} title={'Retorna...'}>
          Voltar
        </button>

        {/* {state.levelcase > 0 ? ( */}
        <button onClick={() => {}} title={'Passo : " 2 ".'}>
          Próximo.
        </button>
        {/* ) : null} */}
      </C.Container>
    </Theme>
  );
};
