import React from 'react';

import * as C from './styles';

type PropsDivProgress = {
  id?: string;
  bgcor?: string;
  perc?: number;
  isperc: boolean;
  open: boolean;
  onClick?: () => void;
};
export const DivProgress: React.FC<PropsDivProgress> = ({
  id,
  bgcor,
  perc,
  isperc,
  open
}) => {
  const handlerOnClick = () => {
    alert('cliquei neste : ' + id);
  };
  return (
    <C.DivProgresFlex
      open={open}
      id={id}
      bgcor={bgcor}
      onClick={handlerOnClick}
    >
      {isperc ? <span>{perc}%</span> : <span> 0%</span>}
    </C.DivProgresFlex>
  );
};
