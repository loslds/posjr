import styled from 'styled-components';

export const ContentModal = styled.div`
  position: absolute;
  border: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ContainerModal = styled.div`
  border: 2px #727272 solid;
  position: relative;
  top: 100px;
  left: 300px;
  width: 29.3%;
  height: 40vh;
  background-color: #383838;
`;

export const ContainerTitleButton = styled.div`
  border: 2px dashed yellow;
  margin: 2px 2px 2px 2px;
  padding: 0px 0px 0px 2px;
  width: 98%;
  display: inline-flex;
  justify-content: center;
  align-content: center;
`;

export const ModalDivRightsImg = styled.div`
  border: none;
  border-radius: 50%;
  margin: 5px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 30px;
  width: 30px;
  background-color: transparent;
  display: flex;
  flex-flow: row;

  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #7df0c1;
  }
  span {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 30px;
    color: #07fa00;
  }
`;

export const DivButtonClose = styled.div`
  margin: 5px 10px 10px 10px;
  padding: 0px 0px 0px 0px;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  color: white;
`;
