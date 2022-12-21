import React from 'react';

import * as C from './styles';

export const listMsg = [
  { id: 'Simbolo', msg: 'cliquei em Simbolos.' },
  { id: 'Cxalta', msg: 'cliquei em Caixa Alta.' },
  { id: 'Cxbaixa', msg: 'cliquei em Caixa Baixa.' },
  { id: 'Numeral', msg: 'cliquei em Caixa Numerais.' }
];

type PropsDivInfo = {
  id?: string;
  bgcor?: string;
  open: boolean;
  children?: React.ReactNode;
};

export const DivInfo: React.FC<PropsDivInfo> = ({
  id,
  open,
  bgcor,
  children
}) => {
  return (
    <C.DivContainerInfo id={id} open={open} bgcor={bgcor}>
      {children};
    </C.DivContainerInfo>
  );
};
