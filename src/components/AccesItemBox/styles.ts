import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  border: 2px solid #25cd89;
  border-radius: 10px;
  padding: 5px 5px 5px 5px;
  margin: 5px 0px 5px 15px;
  display: flex;
  align-items: center;
  color: #fff;
  h1 {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    color: #fff;
    font-size: 23px;
    font-style: normal;
    line-height: 25px;
  }
  p {
    padding: 0px 0px 0px 0px;
    margin: 0px 4px 0px 0px;
    color: #b8b8d4;
    font-size: 14px;
    font-style: normal;
    line-height: 16px;
  }
  span {
    padding: 0px 0px 0px 0px;
    margin: 0px 10px 0px 10px;
  }
`;
export const ContainerFlex = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #b8b8d4;
`;

export const Img = styled.div`
  border: 1px solid #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #191459;
  display: flex;
  justify-content: center;
  align-items: center;
`;
