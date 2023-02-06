import styled from 'styled-components';
// ===================================
export const ContainerLayout = styled.div`
  border: 0px;
  padding: 0px 5px 0px 5px;
  margin: 10px 10px 10px 10px;
  width: 97.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  background: #f1f1f1f1;
  h1 {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    font-size: 23px;
    font-style: normal;
    line-height: 25px;
  }
  p {
    padding: 0px 0px 0px 0px;
    margin: 0px 4px 0px 2px;
    font-size: 14px;
    font-style: normal;
    line-height: 16px;
    color: #333333;
  }
`;

export const ContainerPg = styled.div`
  border: 2px yellow solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const ContainerPgFlexBetween = styled.div`
  border: 2px black dashed;
  width: 900px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`;
export const DivisionPgHztal = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 1px;
  width: 98%;
  display: flex;
  background-color: #7f7fbb;
`;
