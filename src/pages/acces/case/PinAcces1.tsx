import React from 'react';
import { FaIdBadge, FaCheck, FaLockOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

//import { useIsMounted } from '~/components/hooks';
//import Loading from '~/components/Loading';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { ListUser } from '../../../Boocks';
import * as C from '../../stylesAcces';

export function buscascPIN(descr?: string, chv?: string, nm?: string) {
  if (descr === '' || nm === '' || chv === '') return [];

  const Lista = ListUser.filter(
    users =>
      users.descrlevel === descr && users.pin === chv && users.nameid === nm
  );
  Lista.forEach(ListUser => {
    console.log(ListUser);
  });

  return Lista;
}

export const PinAcces1 = () => {
  const { state, dispatch } = AccesUseForm();
  const [ischvname, setIsChvName] = React.useState(false);
  const [ischvpin, setIsChvPin] = React.useState(false);
  const [ischeckd, setIsCheckd] = React.useState(false);
  const [isconected, setIsConected] = React.useState(false);

  //const [loading, setLoading] = React.useState(false);
  //const isMounted = useIsMounted();

  const [users, setUsers] = React.useState({});
  //const [openFilter, setOpenFilter] = React.useState(false);
  //const [filter, setFilter] = React.useState({ level: state.level });

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

  const handlerFilter = () => {
    // BUSCA EM DATABASE O ACESSO.
    let a = state.descrlevel;
    let b = state.chvpin;
    let c = state.chvname;
    const usuario = buscascPIN(a, b, c);
    let len = usuario.length;
    console.log('usuario :', usuario);
    setUsers(usuario);
    if (usuario) {
      console.log('users :', users);
      for (var i = 0; i <= len; ++i) {
        let tt = usuario[i].idname.val;
        console.log('usuario[i].idname :', tt);
        //users.push({ index: i });
        //console.log(JSON.parse(JSON.stringify(usuarios)));
        setIsConected(true);
      }
    } else {
      setIsConected(false);
    }
    // if (!isconected) {
    //   alert('Usuario não encontrado...');
    // } else {
    //   alert(usuario);
    // }
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

        <button onClick={goto('/casechanger')} title={'Retorna...'}>
          Voltar
        </button>

        {ischeckd && state.chvpin !== '' && !isconected ? (
          <button onClick={handlerFilter} title={'Enviar PIN...'}>
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
      </C.Container>
    </Theme>
  );
};
