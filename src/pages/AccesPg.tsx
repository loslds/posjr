import React from 'react';
import { FaIdBadge, FaKey, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';

import { Theme } from '../components/Theme';
import { AccesActions, AccesUseForm } from '../contexts/AccesContext';
import * as C from './stylesAcces';

export const ListaKey =
  '1234567890abcdefghijklmnopqrstuvxyzwABCDEFGHIJKLMNOPQRSTUVXYZW!#$&+-.<=>@^_'.split(
    ''
  );

export function ttProces(qual = '', testo = '') {
  // const Totalizacao = 0;
  if (qual === 'N') {
    //var ttgeral = 0;
    //var peso = 1;
    //var total = 0;
    const numbers: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const lista = ListaKey;
    for (let x = 0; x < testo.length; x++) {
      const chr = lista[x];
      // var qdd = 0;
      for (let i = 0; i < testo.length; i++) {
        if (testo[i] === chr) {
          console.log('Achei...:', chr);
        } else {
          console.log('Não encontrei...:', chr);
        }
      }
      // if (testo[i] === letra) {
      //   qdd = qdd + 1;
      //   if (qdd > 0) {
      //     total = qdd;
      //   }
      // console.log('qddn : ', qddn);
      // }
      // numbers[x] = total;
    }
    // const tt = numbers.reduce(function (soma, i) {
    // return soma + i;
    // });
    // ttgeral = peso * tt;
    return 1; //ttgeral;
  }
  return 0;
}

// if (qual === 'B'){
//   var ttgeral = 0;
//   var peso = 1;
//   var total = 0;
//   const caixabaixa: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   const lista = 'abcdefghijklmnopqrstuvxwyz';
//   for (let x = 0; x < testo.length; x++) {
//     const letra = lista[x];
//     var qdd = 0;
//     for (let i = 0; i < testo.length; i++) {
//       if (testo[i] === letra) {
//         qdd = qdd + 1;
//         if (qdd > 0) {
//           total = qdd;
//         }
//       }
//       caixabaixa[x] = total;
//     }
//   }
//   const tt = caixabaixa.reduce(function (soma, i) {
//     return soma + i;
//   });
//   ttgeral = peso * tt;
//   return ttgeral;
// }

// if (qual === 'A'){
//   var ttgeral = 0;
//   var peso = 1;
//   var total = 0;
//   const caixaalta: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   const lista = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
//   for (let x = 0; x < testo.length; x++) {
//     const letra = lista[x];
//     var qdd = 0;
//     for (let i = 0; i < testo.length; i++) {
//       if (testo[i] === letra) {
//         qdd = qdd + 1;
//         if (qdd > 0) {
//           total = qdd;
//         }
//       }
//       caixaalta[x] = total;
//     }
//   }
//   const tt = caixaalta.reduce(function (soma, i) {
//     return soma + i;
//   });
//   ttgeral = peso * tt;
//   return ttgeral;
// }

// if (qual === 'S'){
//     var ttgeral = 0;
//     var peso = 1;
//     var total = 0;
//     const caixaalta: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//     const lista = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
//     const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;

//     for (let x = 0; x < testo.length; x++) {
//       const letra = [x];
//       var qdd = 0;
//       for (let i = 0; i < testo.length; i++) {
//         if (testo[i] === letra) {
//           qdd = qdd + 1;
//           if (qdd > 0) {
//             total = qdd;
//           }
//         }
//         caixaalta[x] = total;
//       }
//     }
//     const tt = caixaalta.reduce(function (soma, i) {
//       return soma + i;
//     });
//     ttgeral = peso * tt;
//     return ttgeral;
//   }

export function findForcaSnh(testo = '') {
  // if (!qual ) return 1;
  if (!testo) return 1;
  //const numbers: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const lista = ListaKey;
  for (let x = 0; x < testo.length; x++) {
    const chr = lista[x];
    var qdd = 0;
    for (let i = 0; i < testo.length; i++) {
      const s = testo[i];
      if (s.match(/[0-9]/g)?.length) {
        console.log('sim "s" é um Numero :', s);
      }
      if (s.match(/[a-z]/g)?.length) {
        console.log('sim "s" é um letra Cx. Baixa :', s);
      }
      if (s.match(/[A-Z]/g)?.length) {
        console.log('sim "s" é um letra Cx. Alta :', s);
      }
      const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
      if (s.match(rex)?.length) {
        console.log('sim "s" é um Simbolo :', s);
      }
    }
  }
  return 2;
}

// if (qual === 'N'){
//   const ttgeralN = ttProces(qual , testo );
//   return ttgeralN;
// }
// if (qual === 'B'){
//   const ttgeralb = ttProces(qual , testo );
//   return ttgeralb;
// }
// if (qual === 'A'){
//   const ttgerala = ttProces(qual , testo );
//   return ttgerala;
// }
// if (qual === 'S'){
//   const ttgerals = ttProces(qual , testo );
//   return ttgerals;
// }

export const AccesPg = () => {
  const [isAccesId, setIsAccesId] = React.useState(false);
  const [isimputname, setIsImputName] = React.useState(false);
  const [isAccespas, setIsAccesPas] = React.useState(false);
  const [isimputpass, setIsImputPass] = React.useState(false);
  const [islengpas, setIsLengPas] = React.useState(false);

  const [strsenha, setStrSenha] = React.useState('');
  const [tnhsenha, setTnhSenha] = React.useState(0);

  const [isnumeral, setIsNumeral] = React.useState(false);
  const [iscxbax, setIsCxBax] = React.useState(false);
  const [iscxalta, setIsCxAlta] = React.useState(false);
  const [issimbol, setIsSimbol] = React.useState(false);

  const [ischeck, setIsCheck] = React.useState(false);
  const [qddnumeral, setQddNr] = React.useState(0);
  const [qddcxbaixa, setQddCxB] = React.useState(0);
  const [qddcxalta, setQddCxA] = React.useState(0);
  const [qddcxsimb, setQddSb] = React.useState(0);
  const [ttforçan, setTtForcaN] = React.useState(0);
  const [ttforçacxb, setTtForcaCxB] = React.useState(0);
  const [ttforçacxa, setTtForcaCxA] = React.useState(0);
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const snh = e.target.value;
    setStrSenha(snh);
    setIsNumeral(false);
    setIsCxBax(false);
    setIsCxAlta(false);
    setIsSimbol(false);
    setIsCheck(false);
    setTnhSenha(0);
    setQddNr(0);
    setTtForcaN(0);
    setTtForcaCxB(0);
    setTtForcaCxA(0);

    if (snh !== '') {
      const tnh = snh.length;
      setTnhSenha(tnh);
      if (tnh >= 4) {
        setIsCheck(true);
        const ttpesoforcan = findForcaSnh(snh);
        console.log('ttpesoforcan :', ttpesoforcan);
      }

      // if (snh.match(/[0-9]/g)?.length) {
      //   setIsNumeral(true);
      //   const ttpesoforcan = findForcaSnh('N', snh);
      //   setTtForcaN(ttpesoforcan);
      // }
      // if (snh.match(/[a-z]/g)?.length) {
      //   setIsCxBax(true);
      //   const ttpsofrcb = findForcaSnh('B', snh);
      //   setTtForcaCxB(ttpsofrcb);
      // }
      // if (snh.match(/[A-Z]/g)?.length) {
      //   setIsCxAlta(true);
      //   const ttpsofrca = findForcaSnh('A', snh);
      //   setTtForcaCxB(ttpsofrca);
      // }
    }
    ////////////////////////
    //     if (snh.match(/[a-z]/g)?.length) {
    //       setIsCxBax(true);
    //     }
    //     if (snh.match(/[A-Z]/g)?.length) {
    //       setIsCxAlta(true);
    //     }
    //     const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
    //     if (snh.match(rex)?.length) {
    //       setIsSimbol(true);
    //     }
    //   }
    // }
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

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setPassword,
      payload: strsenha
    });
  }, [strsenha, dispatch]);

  const spanChangeId = () => {
    if (state.idname === '') {
      setIsAccesId(false);
      setIsImputName(false);
    } else if (state.idname !== '') {
      setIsAccesId(true);
      setIsImputName(true);
    }
  };
  const spanChangePas = () => {
    if (state.password === '') {
      setIsAccesPas(false);
      setIsImputPass(false);
    } else if (state.password !== '') {
      setIsAccesPas(true);
      setIsImputPass(true);
    }
    if (state.password.length <= 3) {
      setIsLengPas(false);
    } else {
      setIsLengPas(true);
    }
  };

  const handlerEnviar = () => {
    // alert('Enviar Acesso para reconhecimento...');
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
                onKeyUp={spanChangeId}
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
                onKeyUp={spanChangePas}
              />
            </C.SideInputCenter>
            <C.SideImgInputRight>
              {!isAccespas ? (
                <span>
                  <p>{'  '}</p>
                </span>
              ) : null}
              {isAccespas && isimputpass && islengpas ? (
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
          <C.DivForca open={ischeck}>
            <label>Senha : {strsenha} </label>
            <label>Tamanho Senha: {tnhsenha}</label>
            {isnumeral ? (
              <label> Contem Numero : SIM Qdd. de Numeral : {qddnumeral}</label>
            ) : (
              <label> Contem Numero : Não Qdd. de Numeral : {qddnumeral}</label>
            )}
            ;
            {iscxbax ? (
              <label>
                {' '}
                Contem Cx. Baixa : SIM Qdd. de Cx Baixa : {qddcxbaixa}{' '}
              </label>
            ) : (
              <label>
                {' '}
                Contem Cx. Baixa : Não Qdd. de Cx Baixa : {qddcxbaixa}
              </label>
            )}
            ;
            {iscxalta ? (
              <label>
                {' '}
                Contem Cx. Alta : SIM Qdd. de Cx Alta : {qddcxalta}
              </label>
            ) : (
              <label>
                {' '}
                Contem Cx. Alta : Não Qdd. de Cx Alta : {qddcxalta}
              </label>
            )}
            ;
            {issimbol ? (
              <label>Contem Simbolo : SIM Qdd. de Simbolo : {qddcxsimb}</label>
            ) : (
              <label>Contem Simbolo : Não Qdd. de Simbolo : {qddcxsimb}</label>
            )}
            ;
          </C.DivForca>
        </label>
        <button onClick={goto('/homepage')} title={'Retorna p/ Home.'}>
          Voltar
        </button>
        {islengpas ? (
          <button onClick={handlerEnviar} title={'Solicitar Acesso.'}>
            Enviar.
          </button>
        ) : null}
      </C.Container>
    </Theme>
  );
};
