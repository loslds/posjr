import React from 'react';

type Props = {
  value?: number;
  max?: number;
};
export const Teste = ({ value, max }: Props) => {
  return <progress value={value} max={max} />;
};
