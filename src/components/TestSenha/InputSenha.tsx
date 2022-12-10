import React from 'react';

import styled from 'styled-components';

const Input = styled.input``;

// import { Container } from './styles';
export type InputSenhaProps = {
  onChange?: (text: string) => void;
};
export const InputSenha: React.FC<InputSenhaProps> = ({ onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const text = e?.target?.value || '';
    if (onChange) onChange(text);
  };
  return (
    <div>
      <Input onChange={handleChange} />
    </div>
  );
};
