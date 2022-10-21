import React, { ReactNode } from 'react';
import { FaHome, FaKey, FaLock, FaListOl } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { AccesCase } from '../AccesCase';
import { Title } from '../AccesView/styles';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
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
                <Title>
                  <h2>Opções.</h2>
                </Title>
                {/* <p>Use os Acessos Abaixo.</p> */}
                <p>Selecione uma opção para o acesso.</p>
                <hr />

                <label>
                  <div>
                    <C.Button onClick={goto('/homepage')}>
                      Voltar.
                      <span>
                        <FaHome />
                      </span>
                    </C.Button>
                  </div>
                </label>
                <label>
                  <C.Button onClick={goto('/accesnew')}>
                    Criar NOVA Conta.
                    <span>
                      <FaLock />
                    </span>
                  </C.Button>
                </label>
                <label>
                  <C.Button onClick={goto('/accesforgot')}>
                    Esqueci meu Acesso.
                    <span>
                      <FaKey />
                    </span>
                  </C.Button>
                </label>
                <label>
                  {state.idname == '' && state.password == '' ? (
                    <C.Button
                      onClick={handerClickOuter}
                      title={'Acessar de outra Forma...'}
                    >
                      Outra forma de Acesso.
                      <span>
                        <FaListOl />
                      </span>
                    </C.Button>
                  ) : null}
                </label>
                {isOuter ? <AccesCase /> : null}
              </Sidebar>
            </C.Sidebar>
            <C.Page>{children}</C.Page>
          </C.Step>
        </C.Area>
      </C.Container>
    </div>
  );
};
