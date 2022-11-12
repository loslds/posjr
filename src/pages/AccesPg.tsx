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

export function findForcaSnh(testo = '', Tnh = 0) {
  let simb = 0;
  let cxal = 0;
  let cxba = 0;
  let nume = 0;
  if (!testo) return [1, 0, 0, 0, 0, Tnh];
  for (let x = 0; x < testo.length; x++) {
    let total = 0;
    for (let i = 0; i < testo.length; i++) {
      const s = testo[i];
      var vl = 0;
      if (s.match(/[0-9]/g)?.length) {
        nume = 1;
        vl = 1;
      }
      if (s.match(/[a-z]/g)?.length) {
        cxba = 1;
        vl = 7;
      }
      if (s.match(/[A-Z]/g)?.length) {
        cxal = 1;
        vl = 15;
      }
      const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/;
      if (s.match(rex)?.length) {
        simb = 1;
        vl = 55;
      }
      total = total + vl;
    }
    return [total, nume, cxba, cxal, simb, Tnh];
  }
  return [1, 0, 0, 0, 0, Tnh];
}

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
  const [value, setValue] = React.useState(0);
  // const [qddnumeral, setQddNr] = React.useState(0);
  // const [qddcxbaixa, setQddCxB] = React.useState(0);
  // const [qddcxalta, setQddCxA] = React.useState(0);
  // const [qddcxsimb, setQddSb] = React.useState(0);

  const [ttpesonr, setTtPesoNr] = React.useState(0);
  const [ttpesocxb, setTtPesoCxB] = React.useState(0);
  const [ttpesocxa, setTtPesoCxA] = React.useState(0);
  const [ttpesosimb, setTtPesoSimb] = React.useState(0);

  const [ttpeso, setTtPeso] = React.useState(0);
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
    setTtPeso(0);
    setTtPesoNr(0);
    setTtPesoCxB(0);
    setTtPesoCxA(0);
    setTtPesoSimb(0);

    // setQddNr(0);
    // setTtForcaN(0);
    // setTtForcaCxB(0);
    // setTtForcaCxA(0);

    if (snh !== '') {
      const tnh = snh.length;
      setTnhSenha(tnh);
      // if (tnh > 0) {
      setIsCheck(true);
      let ttlistqdd: number[] = [];
      ttlistqdd = findForcaSnh(snh);
      if (ttlistqdd[1]) setIsNumeral(true);
      if (ttlistqdd[2]) setIsCxBax(true);
      if (ttlistqdd[3]) setIsCxAlta(true);
      if (ttlistqdd[4]) setIsSimbol(true);
      let pesoTtchr = 100;
      let pesoUndchr = 8 / pesoTtchr;
      let pesoN = 0;
      let pesox = 0;
      let pesoX = 0;
      let pesoS = 0;
      if (isnumeral) {
        pesoN = pesoUndchr * ttlistqdd[1];
      }
      if (iscxbax) {
        pesox = pesoUndchr * ttlistqdd[2];
      }
      if (iscxalta) {
        pesoX = pesoUndchr * ttlistqdd[3];
      }
      if (issimbol) {
        pesoS = 8 * ttlistqdd[4];
      }
      setTtPesoNr(pesoN);
      setTtPesoCxB(pesox);
      setTtPesoCxA(pesoX);
      setTtPesoSimb(pesoS);

      console.log('PesoN : ', ttpesonr);
      console.log('Pesox : ', ttpesocxb);
      console.log('PesoX : ', ttpesocxa);
      console.log('PesoS : ', ttpesosimb);

      // pesosnh = getPesoSnh(
      //   snh,
      //   isnumeral,
      //   iscxbax,
      //   iscxalta,
      //   issimbol,
      //   tnhsenha
      // );

      setTtPeso(ttlistqdd[0]);
      // }
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
                maxLength={8}
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
            {/* <label>Senha : {strsenha} </label>
            <label>Tamanho Senha: {tnhsenha}</label>
            <label>Total Peso : {ttpeso}</label> */}
            <C.DivProgress>
              <label> Evolução: </label>
              <p>Peso N : {ttpesonr}</p>
              <p>Peso a : {ttpesocxb}</p>
              <p>Peso A : {ttpesocxa}</p>
              <p>Peso S : {ttpesosimb}</p>

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
