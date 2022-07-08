import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg3 = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state } = AccesUseForm();

  // React.useEffect(() => {
  //   dispatch({
  //     type: AccesActions.setCurrentStep,
  //     payload:
  //   });
  // }, [dispatch]);

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: 3/3 </p>
          <h1>Ok... Verifique com atenção sua Informações de Acesso.</h1>
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
            <input type="text" autoFocus readOnly={true} value={state.password} />
          </label>
          <label>
            Confima suas informações ou retorne para Alterção.
            <button onClick={goto('/accespg0')}>Voltar</button>
            <button onClick={() => {}}>ACESSAR.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
