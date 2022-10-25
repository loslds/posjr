import React, { ReactNode } from 'react';
import { FaHome, FaKey, FaLock, FaListOl } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { AccesCase } from '../AccesCase';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Titles } from '../Titles';
import * as C from './styles';

type Props = {
  children?: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
  const { state, dispatch } = AccesUseForm();
  const [isOuter, setIsOuter] = React.useState(false);

  const handerClickOuter = React.useCallback(() => {
    setIsOuter(oldState => !oldState);
  }, []);

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 0
    });
  }, [dispatch]);

  return (
    <div>
      <C.Container>
        <C.Area>
          <Header />
          <C.Step>
            <C.Sidebar>
              <Sidebar>
                <p>Em que posso te ajudar?</p>
                <Titles>
                  <h2>Opções.</h2>
                </Titles>
                <p>Selecione uma opção para o acesso.</p>
                <hr />
                <C.SideBarArea>
                  <label>
                    <div>
                      <C.Button
                        onClick={goto('/homepage')}
                        title={'Volta ao Inicio...'}
                      >
                        Inicio.
                        <span>
                          <FaHome />
                        </span>
                      </C.Button>
                    </div>
                  </label>
                  <label>
                    <C.Button
                      onClick={goto('/accesnew')}
                      title={'Nova Conta...'}
                    >
                      Criar NOVA Conta.
                      <span>
                        <FaLock />
                      </span>
                    </C.Button>
                  </label>
                  <label>
                    <C.Button
                      onClick={goto('/accesforgot')}
                      title={'Esqueci ID ou Senha...'}
                    >
                      Esqueci meu Acesso.
                      <span>
                        <FaKey />
                      </span>
                    </C.Button>
                  </label>
                  <label>
                    {state.idname == '' || state.password == '' ? (
                      <C.Button
                        onClick={handerClickOuter}
                        title={'Outros Acessos...'}
                      >
                        Outra forma de Acesso.
                        <span>
                          <FaListOl />
                        </span>
                      </C.Button>
                    ) : null}
                  </label>
                  {isOuter ? <AccesCase /> : null}
                </C.SideBarArea>
              </Sidebar>
            </C.Sidebar>
            <C.Page>{children}</C.Page>
          </C.Step>
        </C.Area>
      </C.Container>
    </div>
  );
};

// const handlerRebuildForm = () => {
//   dispatch({
//     type: AccesActions.setLevel,
//     payload: 0
//   });
//   dispatch({
//     type: AccesActions.setDescrlevel,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setDescrpath,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setIdname,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setPassword,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setLogado,
//     payload: false
//   });
//   dispatch({
//     type: AccesActions.setName,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setEmail,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setFone,
//     payload: ''
//   });

//   dispatch({
//     type: AccesActions.setCurrentStepNew,
//     payload: 0
//   });
//   dispatch({
//     type: AccesActions.setLevelNew,
//     payload: 0
//   });
//   dispatch({
//     type: AccesActions.setDescrlevelNew,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setDescrpathNew,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setIdnameNew,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setPasswordNew,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setLogadoNew,
//     payload: false
//   });
//   dispatch({
//     type: AccesActions.setNameNew,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setEmailNew,
//     payload: ''
//   });
//   dispatch({
//     type: AccesActions.setFoneNew,
//     payload: ''
//   });
// };
