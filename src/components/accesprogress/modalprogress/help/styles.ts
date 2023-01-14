import styled from 'styled-components';

import divforcasnh from '../img/divforcasnh.svg';
export const ContainerForcaAcesso = styled.div`
  border: 1px dashed red;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;
export const DivImgProgres = styled.img<{ img?: string }>`
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover; /**contain; */
  background-position: center;
  background-image: url(${({ img }) => img || divforcasnh});
`;
