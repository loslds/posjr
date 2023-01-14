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
  const [ismodulo, setIsModulo] = React.useState(false);

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
      payload: 3
    });
    // dispatch({
    //   type: AccesActions.setId,
    //   payload: 10
    // });
    // dispatch({
    //   type: AccesActions.setIdname,
    //   payload: 'Oswaldo'
    // });
    // dispatch({
    //   type: AccesActions.setName,
    //   payload: 'Lindsay'
    // });
    // dispatch({
    //   type: AccesActions.setPassword,
    //   payload: '@LOSlds7'
    // });
    // dispatch({
    //   type: AccesActions.setEmail,
    //   payload: 'loslds@Hotmail.com'
    // });
    // dispatch({
    //   type: AccesActions.setFone,
    //   payload: '85997851139'
    // });
    // dispatch({
    //   type: AccesActions.setCpf,
    //   payload: '93195133849'
    // });
    // dispatch({
    //   type: AccesActions.setChvPin,
    //   payload: '1234'
    // });
    // dispatch({
    //   type: AccesActions.setPage,
    //   payload: 'PinAcces2'
    // });
    // dispatch({
    //   type: AccesActions.setModulo,
    //   payload: 'Admin'
    // });
  }, [dispatch]);

  const handlerClickReception = () => {
    setIsModulo(true);
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Confirmação Pessoal do Acesso</h1>
        </Titles>
        <p>Determine Módulo de Acesso.</p>
        <hr />
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
                onClick={handlerClickReception}
                value={'Recepção.'}
                readOnly={true}
                placeholder={'Acesso Recepção...'}
              />
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {!ismodulo ? (
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

        <button onClick={goto('/pinacces1')} title={'Retorna...'}>
          Voltar
        </button>
        {ismodulo ? (
          <button onClick={goto('/reception')} title={'Recepção...'}>
            Recepção.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
