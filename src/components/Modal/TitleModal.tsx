import React from 'react';
import styled from 'styled-components';

const ContainerModalTitle = styled.div`
  border: 0px; /*1px green dashed;*/
  padding: 0px auto;
  margin: 0px auto;
  min-width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  h1,
  h2,
  h3 {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
    text-decoration-color: #727272;
  }
  h1 {
    text-decoration: 3px underline;
  }
  h2 {
    text-decoration: 2px underline;
  }
  h3 {
    text-decoration: 1.5px underline;
  }
`;

type Props = {
  titulo?: string;
  children?: React.ReactNode;
};

export const TitleModal: React.FC<Props> = ({ titulo, children }) => {
  return (
    <ContainerModalTitle>
      <h2>{children || titulo}</h2>
    </ContainerModalTitle>
  );
};
