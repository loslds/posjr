import React from 'react';
import { FaIdBadge, FaKey, FaCheck, FaCheckCircle } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import {
  AccesDivMain,
  AccesDivProgress
  //AccesDivItensProgress
} from '~/components/accesprogress';
import { Teste } from '~/components/Teste';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import { AccesActions, AccesUseForm } from '../contexts/AccesContext';
import * as C from './stylesAcces';
export const ListaKey = '1234567890abcdefghijklmnopqrstuvxyzwABCDEFGHIJKLMNOPQRSTUVXYZW!#$&+-.<=>@^_'.split('');

export const AccesPg = () => {
  const [isAccesId, setIsAccesId] = React.useState(false);
  const [isimputname, setIsImputName] = React.useState(false);
  const [isAccespas, setIsAccesPas] = React.useState(false);
  const [isimputpass, setIsImputPass] = React.useState(false);
  const [islengid, setIsLengId] = React.useState(false);
  const [islengpas, setIsLengPas] = React.useState(false);
  const [ischeck, setIsCheck] = React.useState(false);
  const [isonoff, setIsOnOff] = React.useState(false);

  const [strnome, setStrNome] = React.useState('');
  const [strsenha, setStrSenha] = React.useState('');

  const [tnhsenha, setTnhSenha] = React.useState(0);
  const [isnumeral, setIsNumeral] = React.useState(false);
  const [iscxbax, setIsCxBax] = React.useState(false);
  const [iscxalta, setIsCxAlta] = React.useState(false);
  const [issimbol, setIsSimbol] = React.useState(false);

  interface Pesosenha {
    tipochar?: string;
    qddchar?: number;
    vlrchar?: number;
    ttvlrchar?: number;
    percchar?: number;
  }
  const ListCheckSnh: Array<Pesosenha> = [
    { tipochar: 'Numeral', qddchar: 0, vlrchar: 1, ttvlrchar: 0, percchar: 0 },
    { tipochar: 'Cxbaixa', qddchar: 0, vlrchar: 7, ttvlrchar: 0, percchar: 0 },
    { tipochar: 'Cxalta', qddchar: 0, vlrchar: 11, ttvlrchar: 0, percchar: 0 },
    { tipochar: 'Simbolo', qddchar: 0, vlrchar: 55, ttvlrchar: 0, percchar: 0 }
  ];

  //const [value, setValue] = React.useState(0);

  const [qddcxn, setQddCxn] = React.useState(0);
  const [qddcxb, setQddCxb] = React.useState(0);
  const [qddcxa, setQddCxa] = React.useState(0);
  const [qddcxs, setQddCxs] = React.useState(0);
  // const [ttqddcx, setTtQddCx] = React.useState(0);

  const [pesocxn, setPesoCxN] = React.useState(0);
  const [pesocxb, setPesoCxB] = React.useState(0);
  const [pesocxa, setPesoCxA] = React.useState(0);
  const [pesocxs, setPesoCxS] = React.useState(0);
  const [ttpesocx, setTtPesoCx] = React.useState(0);

  const [perccxn, setPercCxN] = React.useState(0);
  const [perccxb, setPercCxB] = React.useState(0);
  const [perccxa, setPercCxA] = React.useState(0);
  const [perccxs, setPercCxS] = React.useState(0);
  const [ttperccx, setTtPercCx] = React.useState(0);

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
    const nome = e.target.value;
    dispatch({
      type: AccesActions.setIdname,
      payload: nome
    });
    setStrNome(nome);
    setStrSenha(state.password);
    if (state.name !== '' && state.password !== '') {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
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
  const resgatePesoPW = () => {
    const rtn = [0, 0, 0, 0, 0, 0];
    const snh = state.password;
    let lensnh = snh.length;
    let qddN = 0;
    let TtqddN = 0;
    let qddB = 0;
    let TtqddB = 0;
    let qddA = 0;
    let TtqddA = 0;
    let qddS = 0;
    let TtqddS = 0;
    let Tttnh = 0;
    if (lensnh > 0) {
      console.log('estou aqui', true);
      rtn[0] = 1; /** matris contem ou não caracteres */
      rtn[1] = lensnh; /** tamanho da matriz */
      for (let x = 0; x <= snh.length; x + 1) {
        for (let i = 0; i <= snh.length; i + 1) {
          const s = snh[i];
          if (s.match(/[0-9]/g)?.length) {
            qddN = qddN + 1;
          }
          if (s.match(/[a-z]/g)?.length) {
            qddB = qddB + 1;
          }
          if (s.match(/[A-Z]/g)?.length) {
            qddA = qddA + 1;
          }
          const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
          if (s.match(rex)?.length) {
            qddS = qddS + 1;
          }
        }
        TtqddS = TtqddS + qddS;
        TtqddA = TtqddA + qddA;
        TtqddB = TtqddB + qddB;
        TtqddN = TtqddN + qddN;
      }
      Tttnh = TtqddS + TtqddA + TtqddB + TtqddN;

      rtn[2] = TtqddN;
      rtn[3] = TtqddB;
      rtn[4] = TtqddA;
      rtn[5] = TtqddS;
      rtn[6] = Tttnh;
      ListCheckSnh[0].qddchar = TtqddN;
      console.log('ListCheckSnh[0] :', ListCheckSnh[0].qddchar);
    }
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const snh = e.target.value;
    dispatch({
      type: AccesActions.setPassword,
      payload: snh
    });
    setStrSenha(snh);
    setStrNome(state.name);
    if (state.name !== '' && state.password !== '') {
      setIsCheck(true);
      resgatePesoPW();
    } else {
      setIsCheck(false);
    }
  };

  const spanChangeKeyUpPas = () => {
    if (state.password === '') {
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
  //   if (state.name !== '' && state.password !== '') {
  //     setIsCheck(true);
  //   } else {
  //     setIsCheck(false);
  //   }
  // }, [state.name, state.password, setIsCheck]);

  // const handleProgressOnClick = () => {
  //   alert('aqui...');
  // };

  const handerClickOnOff = React.useCallback(() => {
    setIsOnOff(oldState => !oldState);
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
              <Teste />
              {/* <AccesDivItensProgress
                bgcolor={'rgba(32, 255, 3, 0.8)'}
                nome={'Símbolos'}
                qdd={'3'}
                ttpeso={'100'}
                perc={'30%'}
              >
                <Teste />
              </AccesDivItensProgress>
              <AccesDivItensProgress
                bgcolor={'rgba(255, 230, 3, 0.8)'}
                nome={'Caixa Alta'}
                qdd={'3'}
                ttpeso={'40'}
                perc={'30%'}
              >
                <Teste />
              </AccesDivItensProgress>
              <AccesDivItensProgress
                bgcolor={'rgba(255, 125, 3, 0.8)'}
                nome={'Caixa Baixa'}
                qdd={'3'}
                ttpeso={'21'}
                perc={'30%'}
              >
                <Teste />
              </AccesDivItensProgress>
              <AccesDivItensProgress
                bgcolor={'rgba(255, 7, 3, 0.8)'}
                nome={'Numeral'}
                qdd={'1'}
                ttpeso={'2'}
                perc={'10%'}
              >
                <Teste />
              </AccesDivItensProgress> */}
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
