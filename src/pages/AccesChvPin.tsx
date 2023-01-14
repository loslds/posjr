import React from 'react';
import { FaIdBadge } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { PanelInput } from '~/components/PanelInput';
import {
  SideImgInputLeft,
  SideImgInputRight,
  SideInputCenter
} from '~/components/PanelInput/styles';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from './stylesAcces';

export const AccesChvPin = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
  const { state, dispatch } = AccesUseForm();

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStepNew,
      payload: 1
    });
  }, [dispatch]);

  // const handlerPinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: AccesActions.setChvPin,
  //     payload: e.target.value
  //   });
  // };

  const handlerClearPin = () => {
    let vlr = '';
    dispatch({
      type: AccesActions.setChvPin,
      payload: vlr
    });
    goto('/acceschvpin');
  };
  return (
    <Theme>
      <C.Container>
        <p>Determine sua Segurança.</p>
        <Titles>
          <h1>Determine a Chave PIN.</h1>
        </Titles>
        <p>Complete Dados requeridos :</p>
        <hr />
        <label>
          ID para Reconhecimento.
          <PanelInput>
            <SideImgInputLeft>
              <span>
                <FaIdBadge />
              </span>
            </SideImgInputLeft>
            <SideInputCenter>
              <PanelInput>
                <input
                  type="text"
                  onChange={() => {}}
                  value={state.idname}
                  placeholder={'Digite a sua ID...'}
                />
              </PanelInput>
            </SideInputCenter>
            <SideImgInputRight>aqui</SideImgInputRight>
          </PanelInput>
        </label>
        <button onClick={handlerClearPin} title={'Limpa Edição...'}>
          Limpar.
        </button>
        {state.chvpin !== '' ? (
          <button onClick={() => {}} title={'Solicitar Acesso.'}>
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
