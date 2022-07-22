import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AccesBox } from '~/components/AccesBox';

// import { AccesView } from '~/components/AccesView';
// import ButtonBg from '~/components/buttons/ButtonBg';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

//import olhoa from '../assets/images/olhoa.png';
// import olhoa from '../assets/images/svgs/olhoa.svg';
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

  const [isButtonImg, setIsButtonImg] = React.useState(false);

  const handleBtnTmg = React.useCallback(() => {
    setIsButtonImg(oldState => !oldState);
  }, []);

  const setLevel = (level: number) => {
    handleBtnTmg();
  };

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
          <input type="text" readOnly={true} value={state.descrlevel} />
        </label>
        <label>
          Sua ID de Reconhecimento:
          <input type="text" readOnly={true} value={state.idname} />
        </label>
        <label>
          Sua Password de Acesso:
          <AccesBox
            title={state.password}
            selected={state.level === 1}
            onClick={() => setLevel(1)}
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
