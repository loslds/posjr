import React from 'react';

import * as C from './styles';

type PropsDivProgres = {
  children?: React.ReactNode;
};
export const AccesDivProgress = ({ children }: PropsDivProgres) => {
  return <C.DivForca>{children}</C.DivForca>;
};

// <C.DivForca open={ischeck} senha={state.password}>
// <C.DivProgress>
//   <label> Evolução: </label>
//   <p>Id...... : {strnome}</p>
//   <p>Senha... : {strsenha}</p>
//   <p>Tamanho. : {tnhsenha}</p>
//   <p>Tt. Peso : {ttpesocx}</p>
//   <p>Tt. Perc Cx.: {ttperccx}</p>
//   {isnumeral ? (
//     <BoxDivProgress
//       label={'Força de Numerais.'}
//       qdd={qddcxn}
//       peso={pesocxn}
//       perc={perccxn}
//     />
//   ) : null}
//   {iscxbax ? (
//     <BoxDivProgress
//       label={'Força Letra Minuscula.'}
//       qdd={qddcxb}
//       peso={pesocxb}
//       perc={perccxb}
//     />
//   ) : null}
//   {iscxalta ? (
//     <BoxDivProgress
//       label={'Força Letra Maiúscula.'}
//       qdd={qddcxa}
//       peso={pesocxa}
//       perc={perccxa}
//     />
//   ) : null}
//   {issimbol ? (
//     <BoxDivProgress
//       label={'Força dos Simbolos.'}
//       qdd={qddcxs}
//       peso={pesocxs}
//       perc={perccxs}
//     />
//   ) : null}
//   <C.EscalaProgress width="20px" color="#93fa02"></C.EscalaProgress>
// </C.DivProgress>
// </C.DivForca>
