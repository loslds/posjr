import React from 'react';
import styled from 'styled-components';

const ContainerCardFormAcces = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  background-color: transparent;
  display: flex;
`;

const ContainerCardFormFlex = styled.div`
  border: 1px red dashed;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

type Props = {
  id?: string;
  children?: React.ReactNode;
};

export const CardFormAcces: React.FC<Props> = ({ id, children }) => {
  return (
    <ContainerCardFormAcces id={id}>
      <ContainerCardFormFlex>{children}</ContainerCardFormFlex>
    </ContainerCardFormAcces>
  );
};
