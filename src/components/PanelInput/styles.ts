import styled from 'styled-components';

export const ContainerInput = styled.div`
  border: 2px solid #25cd89;
  border-radius: 10px;
  margin: 0px 0px 2px 15px;
  padding: 0px 0px 2px 2px;
  width: 90%;
  display: inline-flex;
  justify-content: center;
  align-content: center;
`;
export const SideImgInputLeft = styled.div`
  border: 1px dashed red;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 7%;
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: center;
  align-items: center;
  span {
    margin: 0px 8px 0px 2px;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 35px;
  }
`;
export const SideImgInputRight = styled.div`
  border: 1px dashed yellow;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 7%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: right;
  align-content: center;
  align-items: center;
  span {
    margin: 0px 8px 0px 2px;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 35px;
  }
`;
export const SideInputCenter = styled.div`
  border: 1px dashed green;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  input {
    border: 0;
    border-left: 2px solid #25cd89;
    border-right: 2px solid #25cd89;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    display: flex;
    width: 100%;
    background-color: transparent;
    outline: 0;
    color: #fff;
    font-size: 16px;
    line-height: 18px;
  }
`;
