import React from 'react';

import * as C from './styles';

type PropsDivProgress = {
  bgcor?: string;
  perc?: number;
  isperc: boolean;
};
export const DivProgress: React.FC<PropsDivProgress> = ({
  bgcor,
  perc,
  isperc
}) => {
  return (
    <C.DivProgresFlex bgcor={bgcor}>
      {isperc ? <span>{perc}%</span> : <span> 0%</span>}
    </C.DivProgresFlex>
  );
};
