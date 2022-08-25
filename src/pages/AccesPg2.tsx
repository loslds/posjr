import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const ListaKey = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '!',
  '#',
  '$',
  '%',
  '&',
  '+',
  '-',
  '.',
  '<',
  '=',
  '>',
  '@',
  '^',
  '_'
];

// type PropsSnh = {
//   s?: string;
//   p?: number;
//   n?: string;
//   r: boolean;
// };

type PropsAccesP2 = {
  snh?: string;
  pso?: number;
  frc?: string;
};
export const AccesPg2 = ({ snh, pso, frc }: PropsAccesP2) => {
  const [strForca, setStrForca] = React.useState('');
  const [nrForca, setNrForca] = React.useState(0);
  const [nmForca, setNmForca] = React.useState('');
  const [isCheck, setIsCheck] = React.useState(false);

  function chequePeso() {
    setNrForca(nrForca);
    if (strForca.length >= 4 && strForca.length <= 7) {
      setNrForca(nrForca + 10);
    } else if (strForca.length > 7) {
      setNrForca(nrForca + 25);
    }
    if (strForca.length >= 5 && strForca.match(/[a-z] + /)) {
      setNrForca(nrForca + 10);
    }
    if (strForca.length >= 6 && strForca.match(/[A-Z] + /)) {
      setNrForca(nrForca + 20);
    }
    if (
      strForca.length >= 7 &&
      strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)
    ) {
      setNrForca(nrForca + 25);
    }
    pso = nrForca;
  }

  function searchStatus() {
    setNmForca(nmForca);
    if (nrForca < 30) {
      setNmForca('FRACA...');
    }
    if (nrForca >= 30 && nrForca < 50) {
      setNmForca('MÉDIA...');
    }
    if (nrForca >= 50 && nrForca < 70) {
      setNmForca('FORTE...');
    }
    if (nrForca >= 70 && nrForca < 100) {
      setNmForca('EXCELENTE...');
    }
    frc = nmForca;
  }

  const { state, dispatch } = AccesUseForm();

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 3
    });
  }, [dispatch]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (ListaKey.indexOf(event.key) < 0) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setIsCheck(true);
    }
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    snh = e.target.value;
    if (snh === undefined) snh = '';
    dispatch({
      type: AccesActions.setPassword,
      payload: snh
    });
    setStrForca(snh);
  };

  React.useEffect(() => {
    chequePeso();
  }),
    [pso, chequePeso];

  React.useEffect(() => {
    searchStatus();
  }),
    [frc, searchStatus];

  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <div>
      <Theme>
        <C.Container>
          <p>Passo: {state.currentStep}/4 </p>
          <Titles>
            <h1>Ola {state.idname}, determine sua Password.</h1>
          </Titles>
          <p>Preencha o Campo abaixo com seu Acesso.</p>
          <hr />
          <label>
            Desclare sua PassWord de Acesso.
            <p>* Use 8 caracteres que contenham : </p>
            <p>Letras maiúscula, minuscula, números e simbolos.</p>
            <input
              id="psw"
              type="text"
              autoFocus
              maxLength={8}
              onChange={handlerPasswordChange}
              value={state.password}
              placeholder={'Digite a sua Senha...'}
              onKeyPress={handleKeyPress}
            />
            {isCheck ? (
              <div id={'sforca'}>
                <p> {'String Força: ' + strForca}</p>
                <p> {'Peso Força: ' + nrForca}</p>
                <p> {'Nome Força: ' + nmForca}</p>
              </div>
            ) : null}
          </label>
          <button onClick={goto('/accespg1')} title={'Retorna Passo : " 2 ".'}>
            Voltar
          </button>
          {state.password !== '' && state.password.length === 8 ? (
            <button onClick={goto('/accespg3')} title={'Passo : " 4 ".'}>
              Próximo.
            </button>
          ) : null}
        </C.Container>
      </Theme>
    </div>
  );
};

// if (snh === undefined) snh = '';
// if (pso === undefined) pso = 0;
// if (nmf === undefined) nmf = '';

// var pass = snh;
// var peso = 0;
// var nmfrc = '';

// // console.log('entrei....snh=>pass : ', pass);
// if (pass === '') {
//   setStrForca('');
//   setNrForca(0);
//   setNmForca('');
//   setIsCheck(false);
// } else {
//   console.log('pass....: ', pass);
//   setStrForca(pass);
//   console.log('peso....: ', peso);
//   setNrForca(peso);
//   console.log('nmfrc...: ', nmfrc);
//   setNmForca(nmfrc);
//   setIsCheck(true);
// }

// return isCheck;
// }

// function DetectPasword() {
//   if (snh === undefined) snh = '';
//   if (pso === undefined) pso = 0;
//   if (nmf === undefined) nmf = '';

//   var pass = snh;
//   var peso = 0;
//   var nmfrc = '';

//   // console.log('entrei....snh=>pass : ', pass);
//   if (pass === '') {
//     setStrForca('');
//     setNrForca(0);
//     setNmForca('');
//     setIsCheck(false);
//   } else {
//     console.log('pass....: ', pass);
//     setStrForca(pass);
//     console.log('peso....: ', peso);
//     setNrForca(peso);
//     console.log('nmfrc...: ', nmfrc);
//     setNmForca(nmfrc);
//     setIsCheck(true);
//   }

//   return isCheck;
// }
