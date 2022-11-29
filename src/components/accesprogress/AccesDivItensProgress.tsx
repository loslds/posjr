import React from 'react';

import * as C from './styles';

type PropsDivItens = {
  children?: React.ReactNode;
  //
  nome?: string;
  qdd?: string;
  ttpeso: string;
  perc: string;
};
export const AccesDivItensProgress: React.FC<PropsDivItens> = ({
  children,
  // id,
  nome,
  qdd,
  ttpeso,
  perc
}) => {
  return (
    <C.DivItensProgress>
      <h3>{nome}</h3>
      <C.DivSpace />
      <p>Quantidade.: {qdd}</p>
      <p>Total peso.: {ttpeso}</p>
      <p>Percentual.: {perc}</p>
      {children}
    </C.DivItensProgress>
  );
};
