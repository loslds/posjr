import React from 'react';

import * as C from './styles';

type PropsProgress100 = {
  value: number;
  max?: number;
  color?: string;
  width?: string;
};
export const ProgressBar100: React.FC<PropsProgress100> = ({
  value = 40,
  max = 100,
  color = 'lightBlue',
  width = '40px'
}: PropsProgress100) => {
  return (
    <C.Container100 color={color} width={width}>
      <progress value={value} max={max} />
      <span>{(value * max) / 100}%</span>
    </C.Container100>
  );
};
