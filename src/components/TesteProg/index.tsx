import React from 'react';

type Props = {
  value?: number;
  max?: number;
};
export const TesteProg = ({ value, max }: Props) => {
  return <progress value={value} max={max} />;
};
