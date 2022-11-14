import React from 'react';
import { FaIdBadge, FaKey, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// import { setInterval } from 'timers/promises';
// import { ProgressBarSnh } from '~/components/ProgressBarSnh';
import { Titles } from '~/components/Titles';

import { Theme } from '../components/Theme';
import { AccesActions, AccesUseForm } from '../contexts/AccesContext';
import * as C from './stylesAcces';

export const ListaKey =
  '1234567890abcdefghijklmnopqrstuvxyzwABCDEFGHIJKLMNOPQRSTUVXYZW!#$&+-.<=>@^_'.split(
    ''
  );

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
  //const [value, setValue] = React.useState(0);

  const [qddcxn, setQddCxn] = React.useState(0);
  const [qddcxb, setQddCxb] = React.useState(0);
  const [qddcxa, setQddCxa] = React.useState(0);
  const [qddcxs, setQddCxs] = React.useState(0);
  const [ttqddcx, setTtQddCx] = React.useState(0);

  const [pesocxn, setPesoCxN] = React.useState(0);
  const [pesocxb, setPesoCxB] = React.useState(0);
  const [pesocxa, setPesoCxA] = React.useState(0);
  const [pesocxs, setPesoCxS] = React.useState(0);
  const [ttpesocx, setTtPesoCx] = React.useState(0);

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
    setTnhSenha(0);
    setIsCheck(false);

    setQddCxn(0);
    setQddCxa(0);
    setQddCxb(0);
    setQddCxs(0);
    setTtQddCx(0);

    setPesoCxN(0);
    setPesoCxB(0);
    setPesoCxA(0);
    setPesoCxS(0);
    setTtPesoCx(0);

    if (strsenha !== '') {
      const tnh = strsenha.length;
      setTnhSenha(tnh);
      // if (tnh > 0) {
      setIsCheck(true);
      ////////////////////////////////////////////////////////
      let simb = 0;
      let cxal = 0;
      let cxba = 0;
      let nume = 0;
      let ttchr = 0;
      for (let x = 0; x <= strsenha.length; x++) {
        let vlchr = 0;
        for (let i = 0; i <= strsenha.length; i++) {
          const s = snh[i];
          if (s.match(/[0-9]/g)?.length) {
            nume = nume + 1;
            vlchr = vlchr + 1;
          }
          if (s.match(/[a-z]/g)?.length) {
            cxba = cxba + 1;
            vlchr = vlchr + 1;
          }
          if (s.match(/[A-Z]/g)?.length) {
            cxal = cxal + 1;
            vlchr = vlchr + 1;
          }
          const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
          if (s.match(rex)?.length) {
            simb = simb + 1;
            vlchr = vlchr + 1;
          }
          ttchr = ttchr + vlchr;
        }
      }
      setTtQddCx(ttchr);
      setIsNumeral(true);
      if (nume > 0) {
        setQddCxn(nume);
      }
      setIsCxBax(true);
      if (cxba > 0) {
        setPesoCxB(cxba);
      }
      setIsCxAlta(true);
      if (cxal > 0) {
        setQddCxa(cxal);
      }
      setIsSimbol(true);
      if (simb > 0) {
        setQddCxs(simb);
      }
      ////////////////////////////
      setPesoCxN(qddcxn * 1);
      setPesoCxB(qddcxb * 7);
      setPesoCxA(qddcxa * 17);
      setPesoCxS(qddcxs * 51);
      ////////////////////////////
      setTtPesoCx(pesocxn + pesocxb + pesocxa + pesocxs);
      ////////////////////////////
      let maxPrgchr = '100px';
      let minPrgchr = '0px';
      console.log('maxPrgchr : ', maxPrgchr);
      console.log('minPrgchr : ', minPrgchr);

      if (isnumeral) {
        //pesoN = pesoUndchr * ttlistqdd[1];
        //console.log('pxPrgN : ', pxPrgN);
        //console.log('maxPrgchr : ', minPrgchr);
      }
      if (iscxbax) {
        //pesox = pesoUndchr * ttlistqdd[2];
      }
      if (iscxalta) {
        //pesoX = pesoUndchr * ttlistqdd[3];
      }
      if (issimbol) {
        //pesoS = 8 * ttlistqdd[4];
      }
    }
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
                maxLength={10}
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
            <C.DivProgress>
              <label> Evolução: </label>
              <p>Senha... : {strsenha}</p>
              <p>Tamanho. : {tnhsenha}</p>
              <p>Tt. Peso : {ttpesocx}</p>
              <p>Qdd. Nr. : {qddcxn}</p>
              <p>Peso Nr. : {pesocxn}</p>
              <p>Qdd. CxB : {qddcxb}</p>
              <p>Peso CxB : {pesocxb}</p>
              <p>Qdd. CxA : {qddcxa}</p>
              <p>Peso CxA : {pesocxa}</p>
              <p>Qdd. CxS : {qddcxs}</p>
              <p>Peso CxS : {pesocxs}</p>

              <C.EscalaProgress>
                <div>aaaa</div>
              </C.EscalaProgress>

              {/* <ProgressBarSnh color={'red'} value={value} max={100} /> */}
            </C.DivProgress>
            {/* {isnumeral ? (
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
            ; */}
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
