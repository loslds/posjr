import React, { useState } from 'react';
import { FaIdBadge, FaKey, FaCheck, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import {
  AccesDivItensProgress,
  AccesDivMain,
  AccesDivProgress
} from '~/components/accesprogress';
import { TesteProg } from '~/components/TesteProg';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

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
  const [isAccesId, setIsAccesId] = useState(false);
  const [isimputname, setIsImputName] = useState(false);
  const [isAccespas, setIsAccesPas] = useState(false);
  const [isimputpass, setIsImputPass] = useState(false);
  const [islengid, setIsLengId] = useState(false);
  const [islengpas, setIsLengPas] = useState(false);

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

  //////////////////////////////////////////

  const handlerIdNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: AccesActions.setIdname,
      payload: e.target.value
    });
  };

  const spanChangeKeyUpId = () => {
    if (state.idname === '') {
      setIsAccesId(false);
      setIsImputName(false);
      setIsLengId(false);
    } else if (state.idname !== '') {
      setIsLengId(true);
      setIsAccesId(true);
      setIsImputName(true);
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
      setIsImputPass(false);
      setIsLengPas(false);
    } else {
      setIsAccesPas(true);
      setIsImputPass(true);
      setIsLengPas(true);
    }
  };
  // React.useEffect(() => {
  //   const nome = state.password;
  //   dispatch({
  //     type: AccesActions.setPassword,
  //     payload: nome
  //   });
  // }, []);

  const handerClickOnOff = React.useCallback(() => {
    setIsOnOff(oldState => !oldState);
    if (state.name !== '' && state.password !== '') {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, [state.name, state.password, setIsCheck]);

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
            </C.SideImgInputRight>
          </C.ContainerInput>
        </label>
        <label>
          <AccesDivProgress>
            <C.CheckOnClickProgress onClick={handerClickOnOff}>
              <span>
                <FaCheckCircle color="white" />
              </span>
            </C.CheckOnClickProgress>

            <AccesDivMain open={isonoff}>
              {/** children,  bgcolor,  nome,  qdd,  ttpeso,  perc */}
              {passwordSummary.Simbolo.ischar ? (
                <AccesDivItensProgress
                  bgcolor={passwordSummary.Simbolo.cor}
                  nome={passwordSummary.Simbolo.title}
                  qdd={passwordSummary.Simbolo.quantity}
                  ttpeso={passwordSummary.Simbolo.result}
                  perc={passwordSummary.Simbolo.percent}
                >
                  <TesteProg
                    value={passwordSummary.Simbolo.percent}
                    max={100}
                  />
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
                  <TesteProg
                    value={passwordSummary.Cxbaixa.percent}
                    max={100}
                  />
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
                  <TesteProg
                    value={passwordSummary.Numeral.percent}
                    max={100}
                  />
                </AccesDivItensProgress>
              ) : null}
            </AccesDivMain>
          </AccesDivProgress>
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

// export const caractSNH = [
//   {
//     tipo: 'Simbolos',
//     qdd: 0,
//     valor: 55,
//     ttvl: 0,
//     perc: 0,
//     cor: 'rgba(32, 255, 3, 0.8)'
//   },
//   {
//     tipo: 'Caixa Alta',
//     qdd: 0,
//     valor: 11,
//     ttvl: 0,
//     perc: 0,
//     cor: 'rgba(255, 230, 3, 0.8)'
//   },
//   {
//     tipo: 'Caixa Baixa',
//     qdd: 0,
//     valor: 7,
//     ttvl: 0,
//     perc: 0,
//     cor: 'rgba(255, 125, 3, 0.8)'
//   },
//   {
//     tipo: 'Numeral',
//     qdd: 0,
//     valor: 1,
//     ttvl: 0,
//     perc: 0,
//     cor: 'rgba(255, 7, 3, 0.8)'
//   }
// ];

// export function procPassWord(snh = '') {
//   let qddN = 0;
//   let TtN = 0;
//   let qddB = 0;
//   let TtB = 0;
//   let qddA = 0;
//   let TtA = 0;
//   let qddS = 0;
//   let TtS = 0;
//   if (snh.length > 0) {
//     for (let x = 0; x <= snh.length; x + 1) {
//       for (let i = 0; i <= snh.length; i + 1) {
//         const s = snh[i];
//         if (s.match(/[0-9]/g)?.length) {
//           qddN = qddN + 1;
//         }
//         if (s.match(/[a-z]/g)?.length) {
//           qddB = qddB + 1;
//         }
//         if (s.match(/[A-Z]/g)?.length) {
//           qddA = qddA + 1;
//         }
//         const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
//         if (s.match(rex)?.length) {
//           qddS = qddS + 1;
//         }
//       }
//       TtS = TtS + qddS;
//       TtA = TtA + qddA;
//       TtB = TtB + qddB;
//       TtN = TtN + qddN;
//     }
//   }
//   caractSNH[0].qdd = qddS;
//   caractSNH[0].ttvl = TtS * caractSNH[1].valor;
//   caractSNH[0].perc = (TtS * 100) / 10;

//   caractSNH[1].qdd = qddA;
//   caractSNH[1].ttvl = TtA * caractSNH[1].valor;
//   caractSNH[1].perc = (TtA * 100) / 10;

//   caractSNH[2].qdd = qddB;
//   caractSNH[2].ttvl = TtB * caractSNH[1].valor;
//   caractSNH[2].perc = (TtB * 100) / 10;

//   caractSNH[3].qdd = qddN;
//   caractSNH[3].ttvl = TtN * caractSNH[1].valor;
//   caractSNH[3].perc = (TtN * 100) / 10;

//   return caractSNH;
// }

// if (isonoff) {
//   const senha = state.password;
//   console.log('snh : ', senha);
//   let rtn = procPassWord(senha);
//   for (let x = 0; x <= senha.length; x + 1) {
//     const value = rtn[x].valueOf();
//     listaPW[x] = value;
//   }
//   console.log('lista : ', listaPW);
//   // listaPW[0] = rtn[0];
//   // listaPW[1] = rtn[1];
//   // listaPW[2] = rtn[2];
//   // listaPW[3] = rtn[3];
//   // listaPW[4] = rtn[4];
//   // listaPW[5] = rtn[5];
//   // listaPW[6] = rtn[6];
//   // listaPW[7] = rtn[7];
// } else {
//   listaPW[0] = 0;
//   listaPW[1] = 0;
//   listaPW[2] = 0;
//   listaPW[3] = 0;
//   listaPW[4] = 0;
//   listaPW[5] = 0;
//   listaPW[6] = 0;
//   listaPW[7] = 0;
// }

// for (let x = 0; x <= senha.length; x + 1) {
//   const value = rtn[x].valueOf();
//   listaPW[x] = value;
// }

// React.useEffect(() => {
//   if (state.name !== '' && state.password !== '') {
//     setIsCheck(true);
//   } else {
//     setIsCheck(false);
//   }
// }, [state.name, state.password, setIsCheck]);

// const handleProgressOnClick = () => {
//   alert('aqui...');
// };

// for (let x = 0; x <= snh.length; x + 1) {
//   for (let i = 0; i <= snh.length; i + 1) {
//     const s = snh[i];
//     if (s.match(/[0-9]/g)?.length) {
//       qddN = qddN + 1;
//     }
//     if (s.match(/[a-z]/g)?.length) {
//       qddB = qddB + 1;
//     }
//     if (s.match(/[A-Z]/g)?.length) {
//       qddA = qddA + 1;
//     }
//     const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
//     if (s.match(rex)?.length) {
//       qddS = qddS + 1;
//     }
//   }
//   TtqddS = TtqddS + qddS;
//   TtqddA = TtqddA + qddA;
//   TtqddB = TtqddB + qddB;
//   TtqddN = TtqddN + qddN;
// }
// // Tttnh = TtqddS + TtqddA + TtqddB + TtqddN;

// setQddCxn(TtqddN);
// setQddCxb(TtqddN);
// setQddCxa(TtqddN);
// setQddCxs(TtqddN);

// setPesoCxN(TtqddN * 1);
// setPesoCxB(TtqddB * 7);
// setPesoCxA(TtqddA * 17);
// setPesoCxS(TtqddB * 55);

// setPercCxN((100 * TtqddN) / 10);
// setPercCxB((100 * TtqddB) / 10);
// setPercCxA((100 * TtqddA) / 10);
// setPercCxS((100 * TtqddS) / 10);
// // setTtPercCx((100 * TtqddN) / 10);
// } else {
//   setIsCheck(false);
// }

// export function findForcaSnh(testo = '') {
//   const rtn = [0, 0, 0, 0, 0, 0, 0];
//   if (!testo) {
//     return rtn;
//   }
//   let lentst = testo.length;
//   let qddN = 0;
//   let TtqddN = 0;
//   let qddB = 0;
//   let TtqddB = 0;
//   let qddA = 0;
//   let TtqddA = 0;
//   let qddS = 0;
//   let TtqddS = 0;
//   let Tttnh = 0;

//   if (lentst > 0) {
//     rtn[0] = 1; /** matris contem ou não caracteres */
//     rtn[1] = lentst; /** tamanho da matriz */
//     for (let x = 0; x <= testo.length; x + 1) {
//       for (let i = 0; i <= testo.length; i + 1) {
//         const s = testo[i];
//         if (s.match(/[0-9]/g)?.length) {
//           qddN = qddN + 1;
//         }
//         if (s.match(/[a-z]/g)?.length) {
//           qddB = qddB + 1;
//         }
//         if (s.match(/[A-Z]/g)?.length) {
//           qddA = qddA + 1;
//         }
//         const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
//         if (s.match(rex)?.length) {
//           qddS = qddS + 1;
//         }
//       }
//       TtqddS = TtqddS + qddS;
//       TtqddA = TtqddA + qddA;
//       TtqddB = TtqddB + qddB;
//       TtqddN = TtqddN + qddN;
//     }
//     Tttnh = TtqddS + TtqddA + TtqddB + TtqddN;
//     rtn[2] = TtqddN;
//     rtn[3] = TtqddB;
//     rtn[4] = TtqddA;
//     rtn[5] = TtqddS;
//     rtn[6] = Tttnh;
//     return rtn;
//   }
//   return rtn;
// }

// export function findQddSimbolo(testo = '') {
//   const snhS = testo;
//   let qddS = 0;
//   let TtqddS = 0;
//   for (let x = 0; x <= snhS.length; x + 1) {
//     for (let i = 0; i <= snhS.length; i + 1) {
//       const s = snhS[i];
//       const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
//       if (s.match(rex)?.length) {
//         qddS = qddS + 1;
//       }
//     }
//     TtqddS = TtqddS + qddS;
//   }
//   return TtqddS;
// }

// export function findQddCxAlta(testo = '') {
//   const snhA = testo;
//   let qddA = 0;
//   let TtqddA = 0;
//   for (let x = 0; x <= snhA.length; x + 1) {
//     for (let i = 0; i <= snhA.length; i + 1) {
//       const s = snhA[i];
//       if (s.match(/[A-Z]/g)?.length) {
//         qddA = qddA + 1;
//       }
//     }
//     TtqddA = TtqddA + qddA;
//   }
//   return TtqddA;
// }

// export function findQddCxBaixa(testo = '') {
//   const snhB = testo;
//   let qddB = 0;
//   let TtqddB = 0;
//   for (let x = 0; x <= snhB.length; x + 1) {
//     for (let i = 0; i <= snhB.length; i + 1) {
//       const s = snhB[i];
//       if (s.match(/[a-z]/g)?.length) {
//         qddB = qddB + 1;
//       }
//     }
//     TtqddB = TtqddB + qddB;
//   }
//   return TtqddB;
// }

// export function findQddNumber(testo = '') {
//   const snhN = testo;
//   let qddN = 0;
//   let TtqddN = 0;
//   for (let x = 0; x <= snhN.length; x + 1) {
//     for (let i = 0; i <= snhN.length; i + 1) {
//       const s = snhN[i];
//       if (s.match(/[0-9]/g)?.length) {
//         qddN = qddN + 1;
//       }
//     }
//     TtqddN = TtqddN + qddN;
//   }
//   return TtqddN;
// }

//
// export function findForcaSnh(testo = '', Tnh = 0) {
//   let simb = 0;
//   let cxal = 0;
//   let cxba = 0;
//   let nume = 0;
//   if (!testo) return [1, 0, 0, 0, 0, Tnh];
//   for (let x = 0; x < testo.length; x++) {
//     let total = 0;
//     for (let i = 0; i < testo.length; i++) {
//       const s = testo[i];
//       var vl = 0;
//       if (s.match(/[0-9]/g)?.length) {
//         nume = nume + 1;
//         vl = vl + 1;
//       }
//       if (s.match(/[a-z]/g)?.length) {
//         cxba = cxba + 1;
//         vl = vl + 7;
//       }
//       if (s.match(/[A-Z]/g)?.length) {
//         cxal = cxal + 1;
//         vl = vl + 15;
//       }
//       const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
//       if (s.match(rex)?.length) {
//         simb = simb + 1;
//         vl = vl + 55;
//       }
//       ttchr = ttchr + vl;
//     }

//     if (Tnh <= ttchr) {
//       {
//         () => {
//           alert('Totais diferênte...');
//           return [1, 0, 0, 0, 0, Tnh];
//         };
//       }
//     }
//     return [total, nume, cxba, cxal, simb];
//   }
//   return [1, 0, 0, 0, 0];
// }

// React.useEffect(() => {
//   const interval = setInterval(100, () => {
//     setValue(oldvalue => {
//       const newvalue = oldvalue + 10;
//       if (newvalue <= 100) {
//         return newvalue;
//       }
//       // clearInterval(interval);
//       return oldvalue;
//     });
//   });
// }, []);

//////////////////////////////////////////////////
//   const snh = strsenha;

//   setStrSenha(snh);
//   setIsNumeral(false);
//   setIsCxBax(false);
//   setIsCxAlta(false);
//   setIsSimbol(false);
//   setTnhSenha(0);
//   setIsCheck(false);

//   setQddCxn(0);
//   setQddCxa(0);
//   setQddCxb(0);
//   setQddCxs(0);
//   setTtQddCx(0);

//   setPesoCxN(0);
//   setPesoCxB(0);
//   setPesoCxA(0);
//   setPesoCxS(0);
//   setTtPesoCx(0);

//   if (strsenha !== '') {
//     const tnh = strsenha.length;
//     setTnhSenha(tnh);
//     // if (tnh > 0) {
//     setIsCheck(true);
//     ////////////////////////////////////////////////////////
//     let simb = 0;
//     let cxal = 0;
//     let cxba = 0;
//     let nume = 0;
//     let ttchr = 0;
//     for (let x = 0; x <= strsenha.length; x + 1) {
//       let vlchr = 0;
//       for (let i = 0; i <= strsenha.length; i + 1) {
//         const s = snh[i];
//         if (s.match(/[0-9]/g)?.length) {
//           nume = nume + 1;
//           vlchr = vlchr + 1;
//         }
//         if (s.match(/[a-z]/g)?.length) {
//           cxba = cxba + 1;
//           vlchr = vlchr + 1;
//         }
//         if (s.match(/[A-Z]/g)?.length) {
//           cxal = cxal + 1;
//           vlchr = vlchr + 1;
//         }
//         const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
//         if (s.match(rex)?.length) {
//           simb = simb + 1;
//           vlchr = vlchr + 1;
//         }
//         ttchr = ttchr + vlchr;
//       }
//     }
//     setTtQddCx(ttchr);
//     setIsNumeral(true);
//     if (nume > 0) {
//       setQddCxn(nume);
//     }
//     setIsCxBax(true);
//     if (cxba > 0) {
//       setPesoCxB(cxba);
//     }
//     setIsCxAlta(true);
//     if (cxal > 0) {
//       setQddCxa(cxal);
//     }
//     setIsSimbol(true);
//     if (simb > 0) {
//       setQddCxs(simb);
//     }
//     ////////////////////////////
//     setPesoCxN(qddcxn * 1);
//     setPesoCxB(qddcxb * 7);
//     setPesoCxA(qddcxa * 17);
//     setPesoCxS(qddcxs * 51);
//     ////////////////////////////
//     setTtPesoCx(pesocxn + pesocxb + pesocxa + pesocxs);
//     ////////////////////////////
//     let maxPrgchr = '100px';
//     let minPrgchr = '0px';
//     console.log('maxPrgchr : ', maxPrgchr);
//     console.log('minPrgchr : ', minPrgchr);

//     if (isnumeral) {
//       //pesoN = pesoUndchr * ttlistqdd[1];
//       //console.log('pxPrgN : ', pxPrgN);
//       //console.log('maxPrgchr : ', minPrgchr);
//     }
//     if (iscxbax) {
//       //pesox = pesoUndchr * ttlistqdd[2];
//     }
//     if (iscxalta) {
//       //pesoX = pesoUndchr * ttlistqdd[3];
//     }
//     if (issimbol) {
//       //pesoS = 8 * ttlistqdd[4];
//     }
//   }
// };
