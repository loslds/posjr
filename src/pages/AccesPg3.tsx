import React from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonItemBoxBg from '~/components/buttons/ButtonItemBoxBg';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

// import olhoa from '../assets/images/olhoa.png';
import profile from '../assets/images/svgs/profile.svg';
// import olhoa from '../assets/images/svgs/olhoa.svg';
import { Theme } from '../components/Theme';
import * as C from './stylesAcces';
type PropsBoxBtn = {
  open?: string;
};

export const AccesPg3 = ({ open }: PropsBoxBtn) => {
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

  //  const handlerClickButton = () => {
  //    handleBtnTmg();
  //  };
  //  const setLevel = () => {
  //    handleBtnTmg();
  //  };
  // console.log('cliquei: ', isButtonImg);
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
        <label>Sua Password de Acesso:</label>
        <C.ContainerPW>
          <C.ContainerPWFlex>
            <C.ContainerPWCard>
              <Titles>{state.password}</Titles>
              <C.ContainerPWEnd>
                <C.BoxButtonPW open={isButtonImg}>
                  <ButtonItemBoxBg id={'olho'} onClick={() => {}} />
                </C.BoxButtonPW>
              </C.ContainerPWEnd>
            </C.ContainerPWCard>
          </C.ContainerPWFlex>
        </C.ContainerPW>
        {isButtonImg}
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
