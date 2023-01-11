import React from 'react';
import { FaIdBadge, FaCheck, FaLockOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useIsMounted } from '~/components/hooks';
import Loading from '~/components/Loading';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { getUsers } from '../../../services/api/makerdata/Users';
import * as C from '../../stylesAcces';
// type PropsCrgPin = {
//   nm?: string;
//   chv?: string;
// };
// export function getUsuario({nm, chv}: PropsCrgPin) {
//   if (!nm || !chv) return [];
//   return true;
// }
export const PinAcces1 = () => {
  const { state, dispatch } = AccesUseForm();
  const [ischvname, setIsChvName] = React.useState(false);
  const [ischvpin, setIsChvPin] = React.useState(false);
  const [ischeckd, setIsCheckd] = React.useState(false);
  const [isconected, setIsConected] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const isMounted = useIsMounted();
  const [users, setUsers] = React.useState([]);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [filter, setFilter] = React.useState({ level: state.level });

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 2
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
      payload: 'PinAcces2'
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

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    const response = await getUsers({ order: 'id', filter: '' });
    if (isMounted.current) {
      setLoading(false);
      if (response) {
        setUsers(response.users);
      }
    }
  }, [isMounted, filter]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlerFilter = () => {
    // BUSCA EM DATABASE O ACESSO.
    if (users) {
      setIsConected(true);
    } else {
      setIsConected(false);
    }
    if (!isconected) {
      alert('Usuario não encontrado...');
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
          Edite sua seu Nome para ser Reconhecido.
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

        {ischeckd && state.chvpin !== '' && !isconected ? (
          <button onClick={handlerFilter} title={'Enviar PIN...'}>
            Enviar.
          </button>
        ) : null}

        {isconected ? (
          <button
            onClick={goto('/pinacces3')}
            title={'Solicitar Acesso via PIN...'}
          >
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
