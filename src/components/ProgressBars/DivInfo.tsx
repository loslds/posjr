import React from 'react';

import * as C from './styles';

export const listMsg = [
  { id: 'Simbolo', msg: 'cliquei em Simbolos.', onClick: () => {} },
  { id: 'Cxalta', msg: 'cliquei em Caixa Alta.', onClick: () => {} },
  { id: 'Cxbaixa', msg: 'cliquei em Caixa Baixa.', onClick: () => {} },
  { id: 'Numeral', msg: 'cliquei em Caixa Numerais.', onClick: () => {} }
];

type PropsDivProgress = {
  id?: string;
  bgcor?: string;
  open?: boolean;
  isinfo: boolean;
  onClick?: () => void;
};

export const DivProgress: React.FC<PropsDivProgress> = ({
  id,
  open,
  bgcor
}) => {
  return (
    <C.DivProgresFlex id={id} open={open} bgcor={bgcor}>
      {open ? (
        <span>entrei no div...</span>
      ) : (
        <span>Não foi detectado caracteres...</span>
      )}
      ;
    </C.DivProgresFlex>
  );
};
