import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { ButtonsCirclesBg } from '~/components/buttons/stylesButtons';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import olhoa from '../assets/images/svgs/olhoa.svg';
import olhof from '../assets/images/svgs/olhof.svg';
import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

type Props = {
  statepsw?: string;
};
export const AccesPg3 = ({ statepsw }: Props) => {
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
    statepsw = state.password;
  }, [dispatch]);

  const [isButtonImg, setIsButtonImg] = React.useState(true);
  const data = [olhof, olhoa];
  const handleBtnTmg = React.useCallback(() => {
    setIsButtonImg(oldState => !oldState);
  }, []);

  function handlerMudaPW() {
    const valor = state.password;
    if (valor === '') {
      if (isButtonImg) return handleBtnTmg;
      dispatch({
        type: AccesActions.setPassword,
        payload: valor
      });
      statepsw = state.password;
    } else {
      if (isButtonImg) return (statepsw = state.password);
      return statepsw.replace(statepsw, '#');
    }

    console.log('testo: ', valor);
  }

  const handlerClickButton = () => {
    handleBtnTmg();
    handlerMudaPW();
    console.log(isButtonImg);
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
        <label>Sua Password de Acesso:</label>
        <C.ContainerPW>
          <C.ContainerPWFlex>
            <C.ContainerPWCard>
              {isButtonImg ? (
                <Titles>{statepsw}</Titles>
              ) : (
                <Titles>{statepsw}</Titles>
              )}
              <C.ContainerPWEnd>
                {isButtonImg ? (
                  <C.BoxButtonPW
                    img={data[0]}
                    onClick={handlerClickButton}
                    open={isButtonImg}
                  >
                    {''}
                  </C.BoxButtonPW>
                ) : (
                  <C.BoxButtonPW
                    img={data[1]}
                    onClick={handlerClickButton}
                    open={isButtonImg}
                  >
                    {''}
                  </C.BoxButtonPW>
                )}
              </C.ContainerPWEnd>
            </C.ContainerPWCard>
          </C.ContainerPWFlex>
        </C.ContainerPW>

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
