import React, { ReactNode } from 'react';

import { AccesUseForm } from '~/contexts/AccesContext';

import { Header } from '../Header';
import * as C from './styles';

type Props = {
  children?: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state, dispatch } = AccesUseForm();
  return (
    <div>
      <C.Container>
        <C.Area>
          <Header />
          <C.Step>
            <C.Sidebar>
              <label>
                <h2>Opções :</h2>
              </label>
              <label>
                <h3>Acesso :</h3>
                <p>{state.descrlevel}</p>
              </label>
              <label>
                <h3>ID Acesso :</h3>
                <p>{state.idname}</p>
              </label>
              <label>
                <h3>Password do Acesso :</h3>
                <p>{state.password}</p>
              </label>
            </C.Sidebar>
            <C.Page>{children}</C.Page>
          </C.Step>
        </C.Area>
      </C.Container>
    </div>
  );
};
