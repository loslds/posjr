import React from 'react';
import styled from 'styled-components';

const ContainerFormAcces = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 94.3%;
  background-color: #faf3b1;
  color: black;
  display: flex;
`;

const ContainerFormAccesFlex = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: black;
  display: flex row;
  flex-wrap: nowrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`;

type Props = {
  id?: string;
  children?: React.ReactNode;
};

export const MainFormAcces: React.FC<Props> = ({ id, children }) => {
  return (
    <ContainerFormAcces id={id}>
      <ContainerFormAccesFlex>{children}</ContainerFormAccesFlex>
    </ContainerFormAcces>
  );
};
