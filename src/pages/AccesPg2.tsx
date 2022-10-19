import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

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

export const AccesPg2 = () => {
  const [strForca, setStrForca] = React.useState('');
  const [nrForca, setNrForca] = React.useState(0);
  const [nmForca, setNmForca] = React.useState('');
  const [isCheck, setIsCheck] = React.useState(false);

  const { state, dispatch } = AccesUseForm();

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 3
    });
  }, [dispatch]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!ListaKey.includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setIsCheck(true);
    }
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const snh = e.target.value;
    const pso = findPesoPass(snh);
    const frc = findCharPass(pso);
    setStrForca(snh);
    setNrForca(pso);
    setNmForca(String(frc));
  };

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setPassword,
      payload: strForca
    });
  }, [strForca, dispatch]);

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
              autoFocus={true}
              maxLength={8}
              onChange={handlerPasswordChange}
              value={state.password}
              placeholder={'Digite a sua Senha...'}
              onKeyPress={handleKeyPress}
            />
            {isCheck ? (
              <div id={'sforca'}>
                <p> {'Senha: ' + strForca}</p>
                <p> {'Peso : ' + nrForca}</p>
                <p> {'Força: ' + nmForca}</p>
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

// pso = 0;
// if (snh.length >= 4) {
//   pso = pso + 10;
// } else
// if (snh.length >= 7) {
//   pso = pso + 10;
// }
// if (snh.length > 7) {
//   pso = pso + 25;
// }
// if (snh.length >= 5) {
//   if (snh.match(/[a-z] + /)) {
//     pso = pso + 10;
//   }
// }
// if (snh.length >= 6 && snh.match(/[A-Z] + /)) {
//   pso = pso + 20;
// }
// if (snh.length >= 7 && snh.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) {
//   pso = pso + 25;
// }
// setNrForca(pso);

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
