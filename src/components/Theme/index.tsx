import React, { ReactNode } from 'react';
import { FaHome, FaKey, FaLock, FaListOl } from 'react-icons/fa';
// import { MdSendToMobile, MdKeyboardAlt, MdMail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

// import Header from '../Header';
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

  const [isouter, setIsOuter] = React.useState(false);

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 0
    });
    dispatch({
      type: AccesActions.setPage,
      payload: 'Access'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'Access'
    });
  }, [dispatch]);

  const handlerCase = React.useCallback(() => {
    setIsOuter(oldState => !oldState);
  }, []);
  return (
    <div>
      <C.Container>
        <C.Area>
          {/* <Header>
            <h1>Acesso ao Sistema.</h1>
            <p>Identifique-se: </p>
          </Header> */}
          <C.Step>
            <C.Sidebar>
              <Sidebar>
                <p>Em que posso te ajudar?</p>
                <Titles>
                  <h2>Opções.</h2>
                </Titles>
                <p>Selecione uma opção para o acesso.</p>
                <hr />
                {!state.logado ? (
                  <C.SideBarArea>
                    {state.modulo === 'Access' ? (
                      <label>
                        <C.Button
                          onClick={goto('/homepage')}
                          title={'Volta ao Inicio...'}
                        >
                          Inicio.
                          <span>
                            <FaHome color="#ffffff" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={goto('/newacces')}
                          title={'Nova Conta...'}
                        >
                          Criar NOVA Conta.
                          <span>
                            <FaLock color="#ffffff" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={goto('/forgotacces')}
                          title={'Esqueci ID ou Senha...'}
                        >
                          Esqueci meu Acesso.
                          <span>
                            <FaKey color="#ffffff" />
                          </span>
                        </C.Button>

                        {state.idname === '' && state.password === '' ? (
                          <C.Button
                            onClick={goto('/caseacces')}
                            onKeyDown={handlerCase}
                            title={'Outros Acessos...'}
                          >
                            Outra forma de Acesso.
                            {!isouter ? (
                              <span>
                                <FaListOl color="#ffffff" />
                              </span>
                            ) : (
                              <span>
                                <FaListOl color="#fd0202" />
                              </span>
                            )}
                          </C.Button>
                        ) : null}
                      </label>
                    ) : null}
                    {state.modulo === 'NewAcces' ? (
                      <label>
                        <C.Button
                          onClick={goto('/homepage')}
                          title={'Volta ao Inicio...'}
                        >
                          Inicio.
                          <span>
                            <FaHome color="#ffffff" />
                          </span>
                        </C.Button>

                        <C.Button onClick={() => {}} title={'Nova Conta...'}>
                          Criar NOVA Conta.
                          <span>
                            <FaLock color="#fdfd02" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={() => {}}
                          title={'Esqueci ID ou Senha...'}
                        >
                          Esqueci meu Acesso.
                          <span>
                            <FaKey color="#ff2929" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={() => {}}
                          title={'Outros Acessos...'}
                        >
                          Outra forma de Acesso.
                          <span>
                            <FaListOl color="#ff2929" />
                          </span>
                        </C.Button>
                      </label>
                    ) : null}

                    {state.modulo === 'ForgotAcces' ? (
                      <label>
                        <C.Button
                          onClick={goto('/homepage')}
                          title={'Volta ao Inicio...'}
                        >
                          Inicio.
                          <span>
                            <FaHome color="#ffffff" />
                          </span>
                        </C.Button>

                        <C.Button onClick={() => {}} title={'Nova Conta...'}>
                          Criar NOVA Conta.
                          <span>
                            <FaLock color="#ff2929" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={goto('/forgotacces')}
                          title={'Esqueci ID ou Senha...'}
                        >
                          Esqueci meu Acesso.
                          <span>
                            <FaKey color="#fcfc02" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={() => {}}
                          title={'Outros Acessos...'}
                        >
                          Outra forma de Acesso.
                          <span>
                            <FaListOl color="#ff2929" />
                          </span>
                        </C.Button>
                      </label>
                    ) : null}

                    {state.modulo === 'CaseAcces' ? (
                      <label>
                        <C.Button
                          onClick={goto('/homepage')}
                          title={'Volta ao Inicio...'}
                        >
                          Inicio.
                          <span>
                            <FaHome color="#ffffff" />
                          </span>
                        </C.Button>

                        <C.Button onClick={() => {}} title={'Nova Conta...'}>
                          Criar NOVA Conta.
                          <span>
                            <FaLock color="#ff2929" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={() => {}}
                          title={'Esqueci ID ou Senha...'}
                        >
                          Esqueci meu Acesso.
                          <span>
                            <FaKey color="#ff2929" />
                          </span>
                        </C.Button>

                        <C.Button
                          onClick={() => {}}
                          title={'Outros Acessos...'}
                        >
                          Outra forma de Acesso.
                          <span>
                            <FaListOl color="#fcfc02" />
                          </span>
                        </C.Button>
                      </label>
                    ) : null}
                  </C.SideBarArea>
                ) : null}
              </Sidebar>
            </C.Sidebar>
            <C.Page>{children}</C.Page>
          </C.Step>
        </C.Area>
      </C.Container>
    </div>
  );
};

// <div>
// <C.Button
//   onClick={handerClickOuter}
//   title={'Outros Acessos...'}
// >
//   Outra forma de Acesso.
//   {!isOuter && state.modulo === 'Access' ? (
//   <span>
//     <FaListOl />
//   </span>
//   ) : (
//     <span>
//       <FaListOl color="#ffff29" />
//     </span>
//   )}
// </C.Button>
// {isOuter ? <AccesCase /> : null}
// </div>

// const Descrcase = ['', 'Acesso PIN.', 'Acesso EMS.', 'Acesso EMAIL.'];
// const DescrcasePath = ['', '/caseacces', '/caseacces', '/caseacces'];
// const setCase = (level: number) => {
//   dispatch({
//     type: AccesActions.setLevelCase,
//     payload: level
//   });
//   dispatch({
//     type: AccesActions.setDescrCase,
//     payload: Descrcase[level]
//   });
//   dispatch({
//     type: AccesActions.setDescrCasePath,
//     payload: DescrcasePath[level]
//   });

//   if (level === 1) {
//     setIsAccesPin(true);
//     setIsAccesSms(false);
//     setIsAccesEml(false);
//   } else if (level === 2) {
//     setIsAccesPin(false);
//     setIsAccesSms(true);
//     setIsAccesEml(false);
//   } else if (level === 3) {
//     setIsAccesPin(false);
//     setIsAccesSms(false);
//     setIsAccesEml(true);
//   } else {
//     setIsAccesPin(false);
//     setIsAccesSms(false);
//     setIsAccesEml(false);
//   }
// };

// <C.ContainerCase open={isOuter}>
//   <C.ContainerAreaCase>
//     <label>Com Segurança {state.currentStep}:</label>
//     <C.ButtonCase
//       onClick={goto(DescrcasePath[state.levelcase])}
//       onKeyDown={() => setCase(1)}
//     >
//       Code PIN.
//       {isaccespin ? (
//         <span>
//           <MdKeyboardAlt color="#fcfc02" />
//         </span>
//       ) : (
//         <span>
//           <MdKeyboardAlt color="#ffffff" />
//         </span>
//       )}
//     </C.ButtonCase>
//     <C.ButtonCase onClick={() => setCase(2)}>
//       Code SMS.
//       {isaccessms ? (
//         <span>
//           <MdSendToMobile color="#fcfc02" />
//         </span>
//       ) : (
//         <span>
//           <MdSendToMobile />
//         </span>
//       )}
//     </C.ButtonCase>
//     <C.ButtonCase onClick={() => setCase(3)}>
//       Code EMAIL.
//       {isacceseml ? (
//         <span>
//           <MdMail color="#fcfc02" />
//         </span>
//       ) : (
//         <span>
//           <MdMail />
//         </span>
//       )}
//     </C.ButtonCase>
//   </C.ContainerAreaCase>
// </C.ContainerCase>
