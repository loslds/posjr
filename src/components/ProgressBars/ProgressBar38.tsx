import React from 'react';

import * as C from './styles';

type PropsProgress38 = {
  value: number;
  max?: number;
  color?: string;
  width?: string;
};
export const ProgressBar38: React.FC<PropsProgress38> = ({
  value = 40,
  max = 100,
  color = 'lightBlue',
  width = '40px'
}: PropsProgress38) => {
  return (
    <C.Container38 color={color} width={width}>
      <progress value={value} max={max} />
      <span>{(value * max) / 100}%</span>
    </C.Container38>
  );
};
