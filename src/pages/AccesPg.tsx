import React from 'react';
import { FaIdBadge, FaKey, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import { AccesActions, AccesUseForm } from '../contexts/AccesContext';
import * as C from './stylesAcces';

export const AccesPg = () => {
  export const ListaKey =
  '1234567890abcdefghijklmnopqrstuvxyzwABCDEFGHIJKLMNOPQRSTUVXYZW!#$&+-.<=>@^_'.split(
    ''
  );
  export function findPesoPass(chr = '') {
    if (!chr) return 1;
    // if (chr?.length <= 3) return 1;
    // const nrvza = 0;
    const funcX = (base: number, occur: number = 0) => {
      return (len: number) => {
        const a = len - occur;
        console.log('a : ', a);
        return Number(Math.pow(base, a));
      };
    };

    const multiply: ReturnType<typeof funcX>[] = [];

    if (chr.match(/[0-9]/g)?.length)
      multiply.push(funcX(10, chr.match(/[0-9]/g)?.length));
    if (chr.match(/[a-z]/g)?.length) multiply.push(funcX(25));
    if (chr.match(/[A-Z]/g)?.length) multiply.push(funcX(25));
    const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
    if (chr.match(rex)) multiply.push(funcX(13, chr.match(rex)?.length));

    const points = multiply.reduce((acc, func) => {
      const r = func(chr.length);
      const b = acc + r;

      console.log('b : ', b);

      return b;
    }, 0);

    return points;
  }

  export function findCharPass(points = 0) {
    const arr = [
      ['FORTE', 75],
      ['MÉDIO', 50],
      ['FRACO', 0]
    ];
    // const total = 28244479.67959415;
    // const total = 6.575825076573528e41;
    // const total = 587705317731;
    const total = 306091511971;
    // const total = 6176279767;
    const percent = (points * 100) / total;

    console.log('percent', percent);

    for (let index = 0; index < arr.length; index++) {
      const [label, value] = arr[index];
      if (percent > value) return label;
    }

    return 0;
  }


  const [isAccesId, setIsAccesId] = React.useState(false);
  const [isimputname, setIsImputName] = React.useState(false);
  const [isAccespas, setIsAccesPas] = React.useState(false);
  const [isimputpass, setIsImputPass] = React.useState(false);

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

  const handlerPasswordChange = (event:: React.ChangeEvent<HTMLInputElement>) => {
    if (!ListaKey.includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setIsCheck(true);
    }

    React.useEffect(() => {
      dispatch({
        type: AccesActions.setPassword,
        payload: strForca
      });
    }, [strForca, dispatch]);

    dispatch({
      type: AccesActions.setPassword,
      payload: e.target.value
    });
  };

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
                maxLength={10}
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
          <div>
            <label>
              Acesso : {'acesso'} Peso : {'peso'} forca : {'peso'}
            </label>
          </div>
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
