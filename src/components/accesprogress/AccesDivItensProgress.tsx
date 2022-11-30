import React from 'react';

import { AccesTitleItemProgress } from './AccesTitleItemProgress';
import * as C from './styles';

type PropsDivItens = {
  children?: React.ReactNode;
  //
  bgcolor: string;
  nome?: string;
  qdd?: string;
  ttpeso: string;
  perc: string;
};
export const AccesDivItensProgress: React.FC<PropsDivItens> = ({
  children,
  // id,
  bgcolor,
  nome,
  qdd,
  ttpeso,
  perc
}) => {
  return (
    <C.DivItensProgress>
      <AccesTitleItemProgress color={bgcolor} nome={nome} />
      <C.DivSpace />
      <p>Quantidade.: {qdd}</p>
      <p>Total peso.: {ttpeso}</p>
      <p>Percentual.: {perc}</p>
      {children}
    </C.DivItensProgress>
  );
};
