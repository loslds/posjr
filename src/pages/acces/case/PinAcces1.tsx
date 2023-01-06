import React from 'react';
import { FaIdBadge, FaCheck, FaLockOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from '../../stylesAcces';

export const PinAcces1 = () => {
  const [ischvname, setIsChvName] = React.useState(false);
  const [ischvpin, setIsChvPin] = React.useState(false);
  const [ischeckd, setIsCheckd] = React.useState(false);

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
      type: AccesActions.setChvName,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvPin,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvSms,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvMail,
      payload: ''
    });
    dispatch({
      type: AccesActions.setPage,
      payload: 'PinAcces1'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'CaseAcces'
    });
  }, [dispatch]);

  const handlerChvNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setChvName,
      payload: e.target.value
    });
  };

  const spanChangeKeyUpChvName = () => {
    if (state.chvname === '') {
      setIsChvName(false);
      setIsChvPin(false);
      setIsCheckd(false);
    } else if (state.chvname !== '') {
      setIsChvName(true);
    }
    if (state.chvname !== '' && state.chvpin !== '') {
      setIsCheckd(true);
    }
  };

  const handlerChvPinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setChvPin,
      payload: e.target.value
    });
  };

  const spanChangeKeyUpChvPin = () => {
    if (state.chvpin === '') {
      setIsChvPin(false);
    } else if (state.chvpin !== '') {
      setIsChvPin(true);
    }
    if (state.chvname !== '' && state.chvpin !== '') {
      setIsCheckd(true);
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Reconhecer valores para {state.descrcase}</h1>
        </Titles>
        <p>Determine valores para o processamento.</p>
        <hr />
        <label>
          Chave para ser Reconhecido.
          <C.ContainerInput>
            <C.SideImgInputLeft>
              <span>
                <FaIdBadge />
              </span>
            </C.SideImgInputLeft>
            <C.SideInputCenter>
              <input
                autoFocus
                type="text"
                onChange={handlerChvNameChange}
                value={state.chvname}
                placeholder={'Digite o seu Nome...'}
                onKeyUp={spanChangeKeyUpChvName}
              />
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {!ischvname ? (
                <span>
                  <p>{'  '}</p>
                </span>
              ) : (
                <span>
                  <FaCheck />
                </span>
              )}
            </C.SideImgInputRight>
          </C.ContainerInput>
        </label>

        {ischvname ? (
          <C.Container>
            <hr />
            <h2>Opções.</h2>
            <p>Selecione uma Opção :</p>
            <label>
              Chave PIN para ser Reconhecido.
              <C.ContainerInput>
                <C.SideImgInputLeft>
                  <span>
                    <FaLockOpen />
                  </span>
                </C.SideImgInputLeft>
                <C.SideInputCenter>
                  <input
                    // autoFocus
                    type="text"
                    onChange={handlerChvPinChange}
                    value={state.chvpin}
                    maxLength={4}
                    placeholder={'Digite o seu PIN...'}
                    onKeyUp={spanChangeKeyUpChvPin}
                  />
                </C.SideInputCenter>
                <C.SideImgInputRight>
                  {!ischvpin ? (
                    <span>
                      <p>{'  '}</p>
                    </span>
                  ) : (
                    <span>
                      <FaCheck />
                    </span>
                  )}
                </C.SideImgInputRight>
              </C.ContainerInput>
            </label>
          </C.Container>
        ) : null}
        <button onClick={goto('/pinacces1')} title={'Retorna...'}>
          Voltar
        </button>

        {state.chvpin !== '' && ischeckd ? (
          <button
            onClick={goto('/pinacces2')}
            title={'Solicitar Acesso via PIN...'}
          >
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
