import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { UseForm } from '~/contexts/FormContext';

import * as C from './styles';

export const AccesPg3 = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state } = UseForm();

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: 3/3 </p>
          <h1>Ok... Verifique com atenção sua Informações de Acesso.</h1>
          <p>Leia atentamente e confirme caso estejam certas sua Identificação abaixo.</p>
          <hr />
          <label>
            Sua ID de Reconhecimento:
            <input type="text" autoFocus={true} readOnly={true} value={state.idname} />
          </label>
          <label>
            Seu Acesso ao Sistema:
            <input type="text" autoFocus readOnly={true} value={state.password} />
          </label>
          <label>
            Confima as informações ?<button onClick={goto('/accespage1')}>Voltar</button>
            <button onClick={() => {}}>ACESSAR.</button>
          </label>
        </C.Container>
      </Theme>
    </div>
  );
};
