import React from 'react';
import { FaIdBadge, FaKey, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import { AccesActions, AccesUseForm } from '../../contexts/AccesContext';
import * as C from '../stylesAcces';

type CharType = 'Simbolo' | 'Cxalta' | 'Cxbaixa' | 'Numeral';

type Summary = {
  title: string;
  quantity: number;
  value: number;
  result: number;
  percent: number;
  cor: string;
  ischar: boolean;
  width: string;
  percpx: number;
};

export type PasswordSummary = Record<CharType, Summary>;

export const initialState: PasswordSummary = {
  Simbolo: {
    title: 'Simbolo.',
    percent: 0,
    quantity: 0,
    result: 0,
    value: 55,
    cor: 'rgba(32, 255, 3, 0.8)',
    ischar: false,
    width: '0px',
    percpx: 0
  },
  Cxalta: {
    title: 'Caixa Alta.',
    percent: 0,
    quantity: 0,
    result: 0,
    value: 11,
    cor: 'rgba(255, 230, 3, 0.8)',
    ischar: false,
    width: '0px',
    percpx: 0
  },
  Cxbaixa: {
    title: 'Caixa Baixa.',
    percent: 0,
    quantity: 0,
    result: 0,
    value: 7,
    cor: 'rgba(255, 125, 3, 0.8)',
    ischar: false,
    width: '0px',
    percpx: 0
  },
  Numeral: {
    title: 'Numeral.',
    percent: 0,
    quantity: 0,
    result: 0,
    value: 1,
    cor: 'rgba(255, 7, 3, 0.8)',
    ischar: false,
    width: '0px',
    percpx: 0
  }
};

export function calculateValues(
  text: string,
  oldData: PasswordSummary
): PasswordSummary {
  const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/g;
  const arrCalc: Array<[number, CharType]> = [
    [text.match(rex)?.length || 0, 'Simbolo'],
    [text.match(/[A-Z]/g)?.length || 0, 'Cxalta'],
    [text.match(/[a-z]/g)?.length || 0, 'Cxbaixa'],
    [text.match(/[0-9]/g)?.length || 0, 'Numeral']
  ];

  const result = Object.entries(oldData).reduce(
    (acc, [key, value]) => {
      const k = key as CharType;
      const matchFound = arrCalc.find(f => f.includes(k))?.[0] || 0;
      acc[k].quantity = matchFound;
      acc[k].result = matchFound ? matchFound * value.value : 0;
      acc[k].percent = matchFound ? (matchFound * 100) / 10 : 0;
      acc[k].ischar = matchFound ? true : false;

      if (acc[k].ischar) {
        acc[k].percpx = acc[k].percent;
      } else {
        acc[k].percpx = 0;
      }

      return acc;
    },

    { ...oldData } as PasswordSummary
  );

  return result;
}

export const Access = () => {
  const [isaccesid, setIsAccesId] = React.useState(false);
  const [isinputid, setIsInputId] = React.useState(false);
  const [islengid, setIsLengId] = React.useState(false);
  const [isaccespas, setIsAccesPas] = React.useState(false);
  const [isinputpas, setIsInputPas] = React.useState(false);
  const [islengpas, setIsLengPas] = React.useState(false);
  const [ischeck, setIsCheck] = React.useState(false);
  const [passwordSummary, setPasswordSummary] =
    React.useState<PasswordSummary>(initialState);
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
      type: AccesActions.setPage,
      payload: 'Access'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: 'Access'
    });
  }, [dispatch]);

  const handlerIdNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdname,
      payload: e.target.value
    });
  };

  const spanChangeKeyUpId = () => {
    if (state.idname === '') {
      setIsAccesId(false);
      setIsInputId(false);
      setIsLengId(false);
    } else if (state.idname !== '') {
      setIsLengId(true);
      setIsAccesId(true);
      setIsInputId(true);
    }
    if (state.idname !== '' && state.password !== '') {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e?.target?.value || '';
    const newData = calculateValues(text, { ...passwordSummary });
    setPasswordSummary(newData);
    dispatch({
      type: AccesActions.setPassword,
      payload: text
    });
  };

  const spanChangeKeyUpPas = () => {
    let snh = state.password;
    if (snh === '') {
      setIsAccesPas(false);
      setIsInputPas(false);
      setIsLengPas(false);
    } else {
      setIsAccesPas(true);
      setIsInputPas(true);
      setIsLengPas(true);
    }
    if (state.idname !== '' && state.password !== '') {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };

  const handlerEnviar = () => {
    alert('Enviar Acesso para reconhecimento...');
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo: {state.currentStep}</p>
        <Titles>
          <h2>Solicitação de Senha de Acesso.</h2>
        </Titles>
        <p>Declare seus Dados para Acesso. :</p>
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
                onKeyUp={spanChangeKeyUpId}
              />
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {!isaccesid ? (
                <span>
                  <p>{'  '}</p>
                </span>
              ) : null}
              {isaccesid && isinputid ? (
                <span>
                  <FaCheck />
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
                onChange={handlerPasswordChange}
                value={state.password}
                placeholder={'Digite a sua Senha...'}
                onKeyUp={spanChangeKeyUpPas}
              />
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {!isaccespas ? (
                <span>
                  <p>{'  '}</p>
                </span>
              ) : null}
              {isaccespas && isinputpas ? (
                <span>
                  <FaCheck />
                </span>
              ) : null}
            </C.SideImgInputRight>
          </C.ContainerInput>
        </label>
        <button onClick={goto('/homepage')} title={'Retorna p/ Home.'}>
          Voltar
        </button>
        {islengid && islengpas ? (
          <button onClick={handlerEnviar} title={'Solicitar Acesso.'}>
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
