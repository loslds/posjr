import React from 'react';
import { FaUserLock, FaUserFriends } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { AccesOpction } from '~/components/AccesOpction';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from './stylesAcces';

export const NewAcces = () => {
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
      payload: 0
    });
    dispatch({
      type: AccesActions.setLevel,
      payload: 0
    });
    dispatch({
      type: AccesActions.setDescrlevel,
      payload: ''
    });
    dispatch({
      type: AccesActions.setPage,
      payload: 'NewAcces'
    });
  }, [dispatch]);

  const DescrLevel = ['', 'Usuário Cliênte', 'Usuário Funcioário.'];
  const DescrPath = ['', '/newaccescli', '/newaccesfunc'];
  const setLevel = (level: number) => {
    dispatch({
      type: AccesActions.setLevel,
      payload: level
    });
    dispatch({
      type: AccesActions.setDescrlevel,
      payload: DescrLevel[level]
    });
    dispatch({
      type: AccesActions.setDescrpath,
      payload: DescrPath[level]
    });
  };
  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}/4</p>
        <Titles>
          <h1>Criação de uma Nova Conta ?</h1>
        </Titles>
        <p>Vamos começar... Para qual acesso deseja ?</p>
        <hr />
        <AccesOpction
          title="Usuário Cliênte."
          description={'Acesso Internet.'}
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        >
          {state.level === 1 ? (
            <FaUserFriends color="#fcf226" />
          ) : (
            <FaUserFriends color="#fff" />
          )}
        </AccesOpction>
        <AccesOpction
          title="Usuário Funcionário."
          description={'Acesso Local.'}
          selected={state.level === 2}
          onClick={() => setLevel(2)}
        >
          {state.level === 2 ? (
            <FaUserLock color="#fcf226" />
          ) : (
            <FaUserLock color="#fff" />
          )}
        </AccesOpction>

        {/* <button
          onClick={() => {
            handleClear;
          }}
          title={'Retorna Passo : " 0 ".'}
        >
          Voltar
        </button>
 */}
        {state.level > 0 ? (
          <button
            onClick={goto(DescrPath[state.level])}
            title={'Passo : " 1 ".'}
          >
            Próximo.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};

{
  /* // const handlerIdNameNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: AccesActions.setIdnameNew,
  //     payload: e.target.value
  //   });
  // }; */
}

{
  /* // const handlerPasswordNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: AccesActions.setPasswordNew,
  //     payload: e.target.value
  //   });
  // }; */
}

{
  /* ID/Nome de Reconhecimento.
          <input
            type="text"
            autoFocus={true}
            onChange={handlerIdNameNewChange}
            value={state.idname}
            placeholder={'Digite a sua ID...'}
          />
        </label>
        <label>
          PassWord para Acesso.
          <input
            type="text"
            autoFocus
            onChange={handlerPasswordNewChange}
            value={state.password}
            placeholder={'Digite a sua Senha...'}
          />
        </label> */
}
