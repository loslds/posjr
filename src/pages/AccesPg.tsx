import React, { useState } from 'react';
import { FaIdBadge, FaKey, FaCheck, FaLock, FaSignal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import {
  AccesDivMain,
  AccesDivItensProgress
} from '~/components/accesprogress';
import { TesteProg } from '~/components/TesteProg';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import {
  ProgressBarMain,
  ProgressMainCol,
  ProgressBar100
} from '../components/ProgressBars';
import { AccesActions, AccesUseForm } from '../contexts/AccesContext';
import * as C from './stylesAcces';

type CharType = 'Simbolo' | 'Cxalta' | 'Cxbaixa' | 'Numeral';

type Summary = {
  title: string;
  quantity: number;
  value: number;
  result: number;
  percent: number;
  cor: string;
  ischar: boolean;
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
    ischar: false
  },
  Cxalta: {
    title: 'Caixa Alta.',
    percent: 0,
    quantity: 0,
    result: 0,
    value: 11,
    cor: 'rgba(255, 230, 3, 0.8)',
    ischar: false
  },
  Cxbaixa: {
    title: 'Caixa Baixa.',
    percent: 0,
    quantity: 0,
    result: 0,
    value: 7,
    cor: 'rgba(255, 125, 3, 0.8)',
    ischar: false
  },
  Numeral: {
    title: 'Numeral.',
    percent: 0,
    quantity: 0,
    result: 0,
    value: 1,
    cor: 'rgba(255, 7, 3, 0.8)',
    ischar: false
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

      return acc;
    },
    { ...oldData } as PasswordSummary
  );

  return result;
}

export type Salved = {
  text: string;
};

export const AccesPg = () => {
  const [isaccesid, setIsAccesId] = useState(false);
  const [isinputid, setIsInputId] = useState(false);
  const [islengid, setIsLengId] = useState(false);
  const [isaccespas, setIsAccesPas] = useState(false);
  const [isinputpas, setIsInputPas] = useState(false);
  const [islengpas, setIsLengPas] = useState(false);
  const [isprogress, setIsProgress] = useState(false);
  const [isitensprogress, setIsItensProgress] = useState(false);

  const [isonoff, setIsOnOff] = useState(false);
  const [ischeck, setIsCheck] = useState(false);

  const [passwordSummary, setPasswordSummary] =
    useState<PasswordSummary>(initialState);

  // const [value, setValue] = useLocalStorage<Salved>('text');

  // const [strnome, setStrNome] = React.useState('');
  // const [strsenha, setStrSenha] = React.useState('');

  // const [strqdds, setQddS] = React.useState(0);
  // const [strqdda, setQddA] = React.useState(0);
  // const [strqddb, setQddB] = React.useState(0);
  // const [strqddn, setQddN] = React.useState(0);
  // const [strtts, setTtS] = React.useState(0);
  // const [strtta, setTtA] = React.useState(0);
  // const [strttb, setTtB] = React.useState(0);
  // const [strttn, setTtN] = React.useState(0);

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

  // React.useEffect(() => {
  //   const nome = state.password;
  //   dispatch({
  //     type: AccesActions.setPassword,
  //     payload: nome
  //   });
  // }, []);

  const handerClickProgress = React.useCallback(() => {
    if (ischeck) {
      setIsProgress(oldState => !oldState);
    }
    setIsItensProgress(false);
  }, [ischeck]);

  const handerClickItensProgress = React.useCallback(() => {
    setIsItensProgress(oldState => !oldState);
  }, []);

  // const handlerEnviar = () => {
  //   // alert('Enviar Acesso para reconhecimento...');
  // };

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
        <label>
          Segurança do seu Acesso.
          <C.ContainerInput>
            <C.SideImgInputLeft>
              {ischeck ? (
                <span>
                  <FaLock
                    color={'#f3f05b'}
                    onClick={handerClickProgress}
                    cursor={'pointer'}
                  />
                </span>
              ) : (
                <span>
                  <FaLock />
                </span>
              )}
            </C.SideImgInputLeft>
            <C.SideInputCenter>
              <ProgressBarMain>
                <ProgressMainCol width={'50%'}>
                  <span>Primeiro</span>
                  {isprogress ? (
                    <ProgressBar100
                      value={
                        passwordSummary.Simbolo.percent +
                        passwordSummary.Cxalta.percent +
                        passwordSummary.Cxbaixa.percent +
                        passwordSummary.Numeral.percent
                      }
                      max={100}
                      color={'red'}
                      width={'95%'}
                    />
                  ) : null}
                </ProgressMainCol>
                <ProgressMainCol width={'50%'}>
                  <span>Segundo</span>
                  {isprogress ? (
                    <ProgressBar100
                      value={
                        passwordSummary.Simbolo.percent +
                        passwordSummary.Cxalta.percent +
                        passwordSummary.Cxbaixa.percent +
                        passwordSummary.Numeral.percent
                      }
                      max={100}
                      color={'red'}
                      width={'95%'}
                    />
                  ) : null}
                </ProgressMainCol>
              </ProgressBarMain>
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {isprogress ? (
                <span>
                  <FaSignal
                    color={'#f3f05b'}
                    cursor={'pointer'}
                    onClick={handerClickItensProgress}
                  />
                </span>
              ) : (
                <span>
                  <FaSignal />
                </span>
              )}
            </C.SideImgInputRight>
          </C.ContainerInput>
        </label>
        <label>
          <AccesDivMain open={isitensprogress}>
            {passwordSummary.Simbolo.ischar ? (
              <AccesDivItensProgress
                bgcolor={passwordSummary.Simbolo.cor}
                nome={passwordSummary.Simbolo.title}
                qdd={passwordSummary.Simbolo.quantity}
                ttpeso={passwordSummary.Simbolo.result}
                perc={passwordSummary.Simbolo.percent}
              >
                <TesteProg value={passwordSummary.Simbolo.percent} max={100} />
              </AccesDivItensProgress>
            ) : null}

            {passwordSummary.Cxalta.ischar ? (
              <AccesDivItensProgress
                bgcolor={passwordSummary.Cxalta.cor}
                nome={passwordSummary.Cxalta.title}
                qdd={passwordSummary.Cxalta.quantity}
                ttpeso={passwordSummary.Cxalta.result}
                perc={passwordSummary.Cxalta.percent}
              >
                <TesteProg value={passwordSummary.Cxalta.percent} max={100} />
              </AccesDivItensProgress>
            ) : null}

            {passwordSummary.Cxbaixa.ischar ? (
              <AccesDivItensProgress
                bgcolor={passwordSummary.Cxbaixa.cor}
                nome={passwordSummary.Cxbaixa.title}
                qdd={passwordSummary.Cxbaixa.quantity}
                ttpeso={passwordSummary.Cxbaixa.result}
                perc={passwordSummary.Cxbaixa.percent}
              >
                <TesteProg value={passwordSummary.Cxbaixa.percent} max={100} />
              </AccesDivItensProgress>
            ) : null}

            {passwordSummary.Numeral.ischar ? (
              <AccesDivItensProgress
                bgcolor={passwordSummary.Numeral.cor}
                nome={passwordSummary.Numeral.title}
                qdd={passwordSummary.Numeral.quantity}
                ttpeso={passwordSummary.Numeral.result}
                perc={passwordSummary.Numeral.percent}
              >
                <TesteProg value={passwordSummary.Numeral.percent} max={100} />
              </AccesDivItensProgress>
            ) : null}
          </AccesDivMain>
        </label>

        <button onClick={goto('/homepage')} title={'Retorna p/ Home.'}>
          Voltar
        </button>
        {islengid && islengpas ? (
          <button onClick={() => {}} title={'Solicitar Acesso.'}>
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
