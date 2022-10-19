import React, { ReactNode } from 'react';
import { FaHome, FaKey, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
                  <h1>Opções :</h1>
                </Title>
                <hr />
                <p>Selecione uma opção para o acesso.</p>
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
              </Sidebar>
            </C.Sidebar>
            <C.Page>{children}</C.Page>
          </C.Step>
        </C.Area>
      </C.Container>
    </div>
  );
};
