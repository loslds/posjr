import React from 'react';

import styled from 'styled-components';

// type Props = {
//   height: string;
// };
const Conteudo = styled.div<{ open?: boolean }>`
  border: 1px dashed yellow;
  padding: 2px 5px 2px 0px;
  margin: 5px 0px 2px 15px;
  height: 20px;

  width: 90%;
  display: flex;
  background-color: transparent;
  font-size: 18px;
`;

export const ContainerPageFlexWidth = styled.div`
  border: 1px green dashed;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 0px;
  width: Calc(45% / 2)-10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  background-color: transparent;
`;

type PropsBarMain = {
  children?: React.ReactNode;
  open?: boolean;
};
export const ProgressBarMain: React.FC<PropsBarMain> = ({ children, open }) => {
  return <Conteudo open={open}>{children}</Conteudo>;
};
