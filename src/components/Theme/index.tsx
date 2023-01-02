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
                    {!state.logado && state.page === 'Access' ? (
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
                        <div>
                          <C.Button
                            onClick={goto('/newacces')}
                            title={'Nova Conta...'}
                          >
                            Criar NOVA Conta.
                            <span>
                              <FaLock />
                            </span>
                          </C.Button>
                        </div>
                        <div>
                          <C.Button
                            onClick={goto('/accesforgot')}
                            title={'Esqueci ID ou Senha...'}
                          >
                            Esqueci meu Acesso.
                            <span>
                              <FaKey />
                            </span>
                          </C.Button>
                        </div>
                        {state.idname === '' || state.password === '' ? (
                          <div>
                            <C.Button
                              onClick={handerClickOuter}
                              title={'Outros Acessos...'}
                            >
                              Outra forma de Acesso.
                              {!isOuter ? (
                                <span>
                                  <FaListOl />
                                </span>
                              ) : (
                                <span>
                                  <FaListOl color="#ffff29" />
                                </span>
                              )}
                            </C.Button>
                          </div>
                        ) : null}
                        {isOuter ? <AccesCase /> : null}
                      </label>
                    ) : null}

                    {!state.logado && state.page === 'NewAcces' ? (
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
                        <div>
                          <C.Button onClick={() => {}} title={'Nova Conta...'}>
                            Criar NOVA Conta.
                            <span>
                              <FaLock color="#ffff29" />
                            </span>
                          </C.Button>
                        </div>
                        <div>
                          <C.Button
                            onClick={() => {}}
                            title={'Esqueci ID ou Senha...'}
                          >
                            Esqueci meu Acesso.
                            <span>
                              <FaKey color="#ff2929" />
                            </span>
                          </C.Button>
                        </div>
                        {state.idname === '' || state.password === '' ? (
                          <div>
                            <C.Button
                              onClick={() => {}}
                              title={'Outros Acessos...'}
                            >
                              Outra forma de Acesso.
                              <span>
                                <FaListOl color="#ff2929" />
                              </span>
                            </C.Button>
                          </div>
                        ) : null}
                      </label>
                    ) : null}

                    {!state.logado && state.page === 'AccesForgot' ? (
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
                        <div>
                          <C.Button onClick={() => {}} title={'Nova Conta...'}>
                            Criar NOVA Conta.
                            <span>
                              <FaLock color="#ff2929" />
                            </span>
                          </C.Button>
                        </div>
                        <div>
                          <C.Button
                            onClick={goto('/accesforgot')}
                            title={'Esqueci ID ou Senha...'}
                          >
                            Esqueci meu Acesso.
                            <span>
                              <FaKey color="#ff2929" />
                            </span>
                          </C.Button>
                        </div>
                        <label>
                          {state.idname === '' || state.password === '' ? (
                            <div>
                              <C.Button
                                onClick={() => {}}
                                title={'Outros Acessos...'}
                              >
                                Outra forma de Acesso.
                                <span>
                                  <FaListOl color="#ff2929" />
                                </span>
                              </C.Button>
                            </div>
                          ) : null}
                        </label>
                      </label>
                    ) : null}
                  </label>
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
