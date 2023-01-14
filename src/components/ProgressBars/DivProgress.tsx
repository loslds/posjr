import React from 'react';

import * as C from './styles';

type PropsDivProgress = {
  id?: string;
  bgcor?: string;
  perc?: number;
  isperc?: boolean;
  onClick?: () => void;
  // onClick?: React.ReactNode;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};
export const DivProgress: React.FC<PropsDivProgress> = ({
  id,
  bgcor,
  isperc,
  perc,
  onClick,
  children
}) => {
  return (
    <C.DivProgresFlex id={id} bgcor={bgcor} onClick={onClick}>
      {isperc ? <span>{perc}%</span> : <span> 0%</span>}
      {children}
    </C.DivProgresFlex>
  );
};
