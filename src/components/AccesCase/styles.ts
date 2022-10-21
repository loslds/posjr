import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 5px 5px 5px;
  margin: 5px 0px 5px 15px;
  width: 100%;
  min-height: 50px;
  background-color: Transparent;
  display: flex;
  color: #fff;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 10px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    color: #fff;
    font-style: normal;
    h1 {
      font-size: 23px;
      line-height: 25px;
    }
    h2 {
      font-size: 20px;
      line-height: 22px;
    }
    h3 {
      font-size: 18px;
      line-height: 20px;
    }
    h4 {
      font-size: 14px;
      line-height: 16px;
    }
    h5 {
      font-size: 10px;
      line-height: 12px;
    }
    p {
      padding: 0px 0px 0px 0px;
      margin: 0px 4px 0px 0px;
      color: #b8b8d4;
      font-size: 14px;
      font-style: normal;
      line-height: 16px;
    }
  }
  label {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #fff;
  }
`;
export const ContainerTitle = styled.div`
  border: 1px dashed yellow;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  width: 100%;
  min-height: 10px;
  background-color: Transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`;
export const ContainerArea = styled.div`
  border: 1px dashed red;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  width: 100%;
  min-height: 48px;
  background-color: Transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  min-height: 50px;
`;

export const ContainerEnd = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 2px 10px;
  min-height: 45px;
  background-color: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;
