import React from 'react';

import * as C from './styles';

type PropsBosDivProgres = {
  label?: string;
  qdd?: number;
  peso?: number;
  perc?: number;
};

export const BoxDivProgress = ({
  label,
  qdd,
  peso,
  perc
}: PropsBosDivProgres) => {
  return (
    <C.Container>
      <h5>{label}</h5>
      <p>Qdd. Nr. : {qdd}</p>
      <p>Peso Nr. : {peso}</p>
      <p>% .. Nr. : {perc}</p>
    </C.Container>
  );
};
