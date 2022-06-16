import React from 'react';

import styled from 'styled-components';

const ContentModal = styled.div`
  position: fixed;
  border: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 85vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 100;
  color: white;
  background-color: rgba(0, 0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 87%;
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

export const MainModal: React.FC<Props> = ({ id, children }) => {
  return (
    <ContentModal id={id}>
      <ContainerModal>{children}</ContainerModal>
    </ContentModal>
  );
};
