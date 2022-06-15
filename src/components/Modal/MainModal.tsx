import React from 'react';
import styled from 'styled-components';

const ContentModal = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  border: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  color: white;
`;

const ContainerModal = styled.div`
  border: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  background-color: white;
  color: black;
  top: 62px;
  position: fixed;
  width: 66.3%;
  height: 90%;
  display: flex row;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  isOpen?: boolean;
  id?: string;
  children?: JSX.Element;
};

export const MainModal: React.FC<Props> = ({ id, isOpen, children }) => {
  return (
    <ContentModal id={id} isOpen={isOpen}>
      <ContainerModal>{children}</ContainerModal>
    </ContentModal>
  );
};
