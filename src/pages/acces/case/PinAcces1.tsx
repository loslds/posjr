import React from 'react';
import { FaIdBadge, FaCheck, FaLockOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useIsMounted } from '~/components/hooks';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { getLevelUsers, getIdnameUsers } from '../../../services/api/user';
import * as C from '../../stylesAcces';

export const PinAcces1 = () => {
  const { state, dispatch } = AccesUseForm();
  const [ischvname, setIsChvName] = React.useState(false);
  const [ischvpin, setIsChvPin] = React.useState(false);
  const [ischeckd, setIsCheckd] = React.useState(false);
  const [isconected, setIsConected] = React.useState(false);

  const isMounted = useIsMounted();
  const [userslevel, setUsersLevel] = React.useState({});
  const [usersidname, setUsersIdname] = React.useState({});
  const [users, setUsers] = React.useState({});
  //const [user, setUser] = React.useState({});
  //const [openFilter, setOpenFilter] = React.useState(false);
  //const [filter, setFilter] = React.useState({ level: state.level });
  const [loading, setLoading] = React.useState(false);
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
      type: AccesActions.setChvIdName,
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

  const handlerChangeChvIdName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setChvIdName,
      payload: e.target.value
    });
  };

  const spanKeyUpChvIdName = () => {
    if (state.chvidname === '') {
      setIsChvName(false);
      setIsChvPin(false);
      setIsCheckd(false);
    } else if (state.chvidname !== '') {
      setIsChvName(true);
    }
    if (state.chvidname !== '' && state.chvpin !== '') {
      setIsCheckd(true);
    }
  };

  const handlerChangeChvPin = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setChvPin,
      payload: e.target.value
    });
  };

  const spanKeyUpChvPin = () => {
    if (state.chvpin === '') {
      setIsChvPin(false);
    } else if (state.chvpin !== '') {
      setIsChvPin(true);
    }
    if (state.chvidname !== '' && state.chvpin !== '') {
      setIsCheckd(true);
    }
  };

  const fetchData = React.useCallback(async () => {
    setIsConected(false);
    setLoading(true);
    //let id: number = 0;

    let level: number = 0;
    if (state.level === 1) {
      level = 1;
    } else if (state.level === 2) {
      level = 2;
    }
    let Filtro = { level };
    const responselevel = await getLevelUsers(Filtro);
    if (isMounted.current) {
      if (responselevel.success) {
        setUsersLevel(responselevel.users);
        // setUsers(response.users);
        let idname: string = '';
        let Filtro1 = { idname };
        const responseidname = await getIdnameUsers(Filtro1, userslevel);
        if (responselevel.success) {
          setUsersIdname(responseidname.users);
          setIsConected(true);
          setLoading(true);
        }
      } else {
        setIsConected(false);
        setLoading(false);
      }
    }
  }, [isMounted, state.level]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

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
                onChange={handlerChangeChvIdName}
                value={state.chvidname}
                placeholder={'Digite o seu Nome...'}
                onKeyUp={spanKeyUpChvIdName}
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
                    onChange={handlerChangeChvPin}
                    value={state.chvpin}
                    maxLength={4}
                    placeholder={'Digite o seu PIN...'}
                    onKeyUp={spanKeyUpChvPin}
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

        <button onClick={goto('/casechanger')} title={'Retorna...'}>
          Voltar
        </button>

        {ischeckd && state.chvpin !== '' && !isconected ? (
          <button onClick={() => fetchData()} title={'Enviar PIN...'}>
            Enviar.
          </button>
        ) : null}

        {isconected ? (
          <button
            onClick={() => alert('ativa modulo conforme acesso.')}
            title={'Ativar Modulo...'}
          >
            Enviar.
          </button>
        ) : null}
        {/* {loading ? <Loading /> : null} */}
        {loading ? (
          <div>
            <p> Conectado</p>
          </div>
        ) : (
          <div>
            <p> Desconectado</p>
          </div>
        )}
      </C.Container>
    </Theme>
  );
};

// const handlerFilterChvs = () => {
//   // BUSCA EM DATABASE O ACESSO.
//   const result = getLvNmPnUsers();
//   setUser(response.user);
//   console.log('users :', users);
// };

// const fetchData = React.useCallback(async () => {
//   setLoading(true);
//   const response = await getUsers();
//   if (isMounted.current) {
//     setLoading(false);
//     if (response.success) setUsers(response.users);
//   }
// }, [isMounted]);

// React.useEffect(() => {
//   fetchData();
// }, [fetchData]);
