import React from 'react';
import { FaIdBadge, FaKey, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import { AccesActions, AccesUseForm } from '../contexts/AccesContext';
import * as C from './stylesAcces';

export const AccesPg = () => {
  const [isAccesId, setIsAccesId] = React.useState(false);
  const [isimputname, setIsImputName] = React.useState(false);
  const [isAccespas, setIsAccesPas] = React.useState(false);
  const [isimputpass, setIsImputPass] = React.useState(false);
  const [strsenha, setStrSenha] = React.useState('');
  const [tnhsenha, setTnhSenha] = React.useState(0);
  const [istamanho, setIsTamanho] = React.useState(false);
  const [isnumeral, setIsNumeral] = React.useState(false);
  const [iscxbax, setIsCxBax] = React.useState(false);
  const [iscxalta, setIsCxAlta] = React.useState(false);
  const [issimbol, setIsSimbol] = React.useState(false);

  const [ischeck, setIsCheck] = React.useState(false);

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
  }, [dispatch]);

  const handlerIdNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdname,
      payload: e.target.value
    });
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const snh = e.target.value;
    setStrSenha(snh);
    if (snh !== '' || snh !== null) {
      const tnh = snh.length;
      setIsTamanho(true);
      setTnhSenha(tnh);
      setIsCheck(true);
      if (snh.match(/[0-9]/g)?.length) {
        setIsNumeral(true);
      } else {
        setIsNumeral(false);
      }

      if (snh.match(/[a-z]/g)?.length) {
        setIsCxBax(true);
      } else {
        setIsCxBax(false);
      }

      if (snh.match(/[A-Z]/g)?.length) {
        setIsCxAlta(true);
      } else {
        setIsCxAlta(false);
      }
      const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
      if (snh.match(rex)?.length) {
        setIsSimbol(true);
      } else {
        setIsSimbol(false);
      }
    } else {
      setIsTamanho(false);
      setIsCheck(false);
    }
  };

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setPassword,
      payload: strsenha
    });
  }, [strsenha, dispatch]);

  const SpanChangeId = () => {
    if (state.idname === '') {
      setIsAccesId(false);
      setIsImputName(false);
    } else if (state.idname !== '') {
      setIsAccesId(true);
      setIsImputName(true);
    }
  };
  const SpanChangePas = () => {
    if (state.password === '') {
      setIsAccesPas(false);
      setIsImputPass(false);
    } else if (state.password !== '') {
      setIsAccesPas(true);
      setIsImputPass(true);
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}</p>
        <Titles>
          <h2>Solicitação do Acesso.</h2>
        </Titles>
        <p>Complete os Dados requeridos :</p>
        <hr />
        <label>
          ID para Reconhecimento.
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
                onChange={handlerIdNameChange}
                value={state.idname}
                placeholder={'Digite a sua ID...'}
                onKeyUp={SpanChangeId}
              />
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {!isAccesId ? (
                <span>
                  <p>{'  '}</p>
                </span>
              ) : null}
              {isAccesId && isimputname ? (
                <span>
                  <FaCheck />
                </span>
              ) : null}
              {isAccesId && !isimputname ? (
                <span>
                  <FaCheck color={'#fa0000'} />
                </span>
              ) : null}
            </C.SideImgInputRight>
          </C.ContainerInput>
        </label>
        <label>
          PASSWORD para Acesso.
          <C.ContainerInput>
            <C.SideImgInputLeft>
              <span>
                <FaKey />
              </span>
            </C.SideImgInputLeft>
            <C.SideInputCenter>
              <input
                type="text"
                maxLength={13}
                autoFocus
                onChange={handlerPasswordChange}
                value={state.password}
                placeholder={'Digite a sua Senha...'}
                onKeyUp={SpanChangePas}
              />
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {!isAccespas ? (
                <span>
                  <p>{'  '}</p>
                </span>
              ) : null}
              {isAccespas && isimputpass ? (
                <span>
                  <FaCheck />
                </span>
              ) : null}
              {isAccespas && !isimputpass ? (
                <span>
                  <FaCheck color={'#fa0000'} />
                </span>
              ) : null}
            </C.SideImgInputRight>
          </C.ContainerInput>
          {ischeck ? (
            <div>
              <p>Senha : {strsenha}</p>
              {istamanho ? (
                <p>Tamanho Senha: {tnhsenha}</p>
              ) : (
                <p>Tamanho : 0 </p>
              )}
              {isnumeral ? (
                <p>Contem Numero : SIM </p>
              ) : (
                <p>Contem Numero : Não </p>
              )}
              {iscxbax ? (
                <p>Contem Cx. Baixa : SIM </p>
              ) : (
                <p>Contem Cx. Baixa : Não </p>
              )}
              {iscxalta ? (
                <p>Contem Cx. Alta : SIM </p>
              ) : (
                <p>Contem Cx. Alta : Não </p>
              )}
              {issimbol ? (
                <p>Contem Simbolo : SIM </p>
              ) : (
                <p>Contem Simbolo : Não </p>
              )}
            </div>
          ) : null}
        </label>
        <button onClick={goto('/homepage')} title={'Retorna p/ Home.'}>
          Voltar
        </button>
        {state.idname !== '' && state.password !== '' ? (
          <button onClick={() => {}} title={'Solicitar Acesso.'}>
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
