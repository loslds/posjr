import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import olhoa from '../assets/images/svgs/olhoa.svg';
import olhof from '../assets/images/svgs/olhof.svg';
import { Theme } from '../components/Theme';
import * as C from './stylesAcces';
export const AccesFunc = () => {
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

  const handlerIdNameChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdname,
      payload: e.target.value
    });
  };
  const handlerIdNameChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setPassword,
      payload: e.target.value
    });
  };

  const [isButtonImg, setIsButtonImg] = React.useState(false);
  const data = [olhoa, olhof];
  const dataf = ['text', 'password'];

  // const handleBtnTmg = React.useCallback(() => {
  //   setIsButtonImg(oldState => !oldState);
  // }, []);

  // const handlerClickButton = () => {
  //   if (state.password === '' || state.password === null) {
  //     setIsButtonImg(false);
  //   }
  //   handleBtnTmg();
  // };

  return (
    <Theme>
      <C.Container>
        <p>Acesso a Rede do Sistema. </p>
        <Titles>
          <h1>Acesso ao Sistema INTERNO.</h1>
        </Titles>
        <p>Determime sua ID e Senha de Acesso abaixo.</p>
        <hr />
        <label>
          Descrição ID de Reconhecimento.
          <div>
            <input
              type="text"
              autoFocus={true}
              onChange={handlerIdNameChangeId}
              value={state.idname}
              placeholder={'Digite a sua ID...'}
            />
          </div>
        </label>
        <label>
          Desclare sua PassWord de Acesso.
          <p>* Use 8 caracteres que contenham : </p>
          <p>Letras maiúscula, minuscula, números e simbolos.</p>
          {isButtonImg ? (
            <div>
              <input
                type={dataf[0]}
                maxLength={8}
                onChange={handlerIdNameChangePass}
                value={state.password}
                placeholder={'Digite a sua Senha...'}
              >
                {/* <span>
                  <C.BoxButtonPW
                    img={data[0]}
                    onClick={handlerClickButton}
                    open={isButtonImg}
                  />
                </span> */}
              </input>
            </div>
          ) : (
            <div>
              <input
                type={dataf[1]}
                maxLength={8}
                onChange={handlerIdNameChangePass}
                value={state.password}
                placeholder={'Digite a sua Senha...'}
              >
                {/* <span>
                  <C.BoxButtonPW
                    img={data[1]}
                    onClick={handlerClickButton}
                    open={isButtonImg}
                  />
                </span> */}
              </input>
            </div>
          )}
        </label>
        <button onClick={goto('/accespg0')} title={'Retorna Passo : " 0 ".'}>
          Voltar.
        </button>
        <button onClick={() => {}} title={'Acesso ao Sistema1.'}>
          Acessar.
        </button>
      </C.Container>
    </Theme>
  );
};
