import React from 'react';
import { FaIdBadge, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from '../../stylesAcces';

export function consulta(p: string) {
  alert('dentro...' + p);
  return false;
}

export const PinAcces2 = () => {
  const [isconected, setIsConected] = React.useState(false);
  const [iscont, setIsCont] = React.useState(0);
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
      type: AccesActions.setId,
      payload: 0
    });
    dispatch({
      type: AccesActions.setIdname,
      payload: ''
    });
    dispatch({
      type: AccesActions.setName,
      payload: ''
    });
    dispatch({
      type: AccesActions.setPassword,
      payload: ''
    });
    dispatch({
      type: AccesActions.setEmail,
      payload: ''
    });
    dispatch({
      type: AccesActions.setFone,
      payload: ''
    });
    dispatch({
      type: AccesActions.setCpf,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvPin,
      payload: ''
    });
    dispatch({
      type: AccesActions.setPage,
      payload: 'PinAcces2'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'CaseAcces'
    });
    {setIsConected( consultaPin(state.chvpin));
  }, [dispatch]);

  // const handlerPinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: AccesActions.setChvPin,
  //     payload: e.target.value
  //   });
  // };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Confirmação Pessoal do Acesso</h1>
        </Titles>
        <p>Determine valores para o processamento.</p>
        <hr />


        {!isconected && iscont >= 3 ? (
          <label>
            Declare Chave para ser Reconhecido.
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
                  onChange={handlerPinChange}
                  value={state.chvpin}
                  placeholder={'Digite a Chave PIN...'}
                  onKeyUp={spanChangeKeyUpPin}
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
        ) : null}
        <button onClick={goto('/PinAcces1')} title={'Retorna...'}>
          Voltar
        </button>
        {state.id > 0 && state.chvpin !== '' ? (
          <button onClick={goto('/pinacces3')} title={'Ferificar Acesso...'}>
            Ferificar.
          </button>
        ) : null}
        {ischeckd ? (
          <button onClick={goto('/pinacces3')} title={'Acesso Liberado...'}>
            Seguir.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
