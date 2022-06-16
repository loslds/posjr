import React from 'react';

import styled from 'styled-components';

const ContainerModalButton = styled.div`
  border: 0px; /*1px red dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  min-width: 15%; /*max-width: Calc(40%/2)-10px;*/
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
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
  id?: string;
  children?: JSX.Element;
};

export const CardButtonsModal: React.FC<Props> = ({ id, children }) => {
  return <ContainerModalButton id={id}>{children}</ContainerModalButton>;
};
