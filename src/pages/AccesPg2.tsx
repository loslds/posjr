import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Titles } from '~/components/Titles';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import { Theme } from '../components/Theme';
import * as C from './stylesAcces';

export const AccesPg2 = () => {
  const [strForca, setStrForca] = React.useState('');
  const [nrForca, setNrForca] = React.useState(0);
  const [nmForca, setNmForca] = React.useState('');

  const { state, dispatch } = AccesUseForm();

  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 3
    });
  }, [dispatch]);

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    dispatch({
      type: AccesActions.setPassword,
      payload: str
    });
    setStrForca(str);
    // handlerValorForca();
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
            <p>
              * Use até 8 caracteres : maiúscula, minuscula, números e simbolos.
            </p>
            <input
              id="psw"
              type="text"
              autoFocus
              maxLength={8}
              onChange={handlerPasswordChange}
              value={state.password}
              placeholder={'Digite a sua Senha...'}
            />
            <div id={'forca'}>
              <p>
                {'Força Senha: '} + {nmForca} + {' => '} + {strForca} + {' => '}{' '}
                + {nrForca} + {'.'}
              </p>
              );
            </div>
          </label>
          <button onClick={goto('/accespg1')} title={'Retorna Passo : " 2 ".'}>
            Voltar
          </button>
          {state.password !== '' ? (
            <button onClick={goto('/accespg3')} title={'Passo : " 4 ".'}>
              Próximo.
            </button>
          ) : null}
        </C.Container>
      </Theme>
    </div>
  );
};

// const handlerValorForca = () => {

//   if (strForca.length <= 3) {
//     /** força fraca  */
//     setNrForca(0);
//     setNmForca(
//       'Determine Números, Letras Minusculas...Maiúsculas e Símbolos...'
//     );
//   }
//   if (strForca.length === 8) {
//     if ( ( (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) ) {
//       setNrForca(100);
//       setNmForca('EXCELENTE...');
//     }
//   }
//   if (strForca.length === 7) {
//     if ( ( !(strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) )
//     || ( (strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) )
//     || ( (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) )
//     || ( (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) ) {
//     setNrForca(85);
//     setNmForca('FORTE...');
//     }
//   }
//   if (strForca.length === 6) {
//     if ( !(strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//     || !(strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//     || !(strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//     || (strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//     || (strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) {
//     setNrForca(50);
//     setNmForca('MÉDIA...');
//     }
//   }
//   if (strForca.length === 5) {
//     if ( (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || !(strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || (strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) {
//       setNrForca(40);
//       setNmForca('REZILIENTE...');
//       }
//     } else if ( (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || !(strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || (strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) {
//       setNrForca(30);
//       setNmForca('FRACA...');
//     }
//   }
//   if (strForca.length === 4) {
//     if ( (strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || !(strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) {
//       setNrForca(80);
//       setNmForca('MÉDIA...');
//     } else if ( (strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || !(strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || !(strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//       || !(strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) {
//       setNrForca(35);
//       setNmForca('FRACA...');
//     }
//   }
//   if (strForca.length < 4) {
//     if ( (strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//     || !(strForca.match(/[0-9] + /)) && (strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//     || !(strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && (strForca.match(/[A-Z] + /)) && !(strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /))
//     || !(strForca.match(/[0-9] + /)) && !(strForca.match(/[a-z] + /)) && !(strForca.match(/[A-Z] + /)) && (strForca.match(/[!*"#$%&'*+,-./:;<=>?@\^_`|~] + /)) ) {
//       setNrForca(30);
//       setNmForca('FRACA...');
//     }
//   }
// };
