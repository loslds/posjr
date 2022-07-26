import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { ButtonsCirclesBg } from '~/components/buttons/stylesButtons';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import olhoa from '../assets/images/svgs/olhoa.svg';
import olhof from '../assets/images/svgs/olhof.svg';
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

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setPasswordNew,
      payload: '########'
    });
  }, [dispatch]);

  const [isButtonImg, setIsButtonImg] = React.useState(false);
  const data = [olhoa, olhof];

  const handleBtnTmg = React.useCallback(() => {
    setIsButtonImg(oldState => !oldState);
  }, []);

  const handlerClickButton = () => {
    if (state.password === '' || state.password === null) {
      setIsButtonImg(false);
    }
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
        <label>Sua Password de Acesso:</label>
        <C.ContainerPW>
          <C.ContainerPWFlex>
            <C.ContainerPWCard>
              {isButtonImg ? (
                <h5>{state.password}</h5>
              ) : (
                <h5>{state.passwordNew}</h5>
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

// function handlerMudaPW() {

//   const valor = state.password;
//   if (valor === '')
//     handleBtnTmg();
//   else if (isButtonImg) return handleBtnTmg;
//     //      statepsw = valor;
//   } else {
//     if (isButtonImg) return (statepsw = state.password);
//     const nr = valor.length;
//     const newvl = valor;
//     for (var i = 0; i <= nr; i++) {
//       valor.replace(valor[i], '#');
//       console.log('newvl[i]', newvl[i]);
//       console.log('newvl ', newvl);
//     }
//     // statepsw = valor;
//   }
//   console.log('valor : ', valor);
//   return false;
//   // statepsw.replace(statepsw, '#');
// }
