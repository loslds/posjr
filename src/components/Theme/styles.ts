import styled from 'styled-components';

export const Container = styled.div`
  background-color: #02044a;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.div`
  margin: auto;
  min-width: 900px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Step = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px #16195c solid;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 3px 0px 5px;
`;

export const Page = styled.div`
  flex: 1;
  flex-wrap: wrap;
  min-width: 200px;
  padding: 10px 3px 0px 5px;
`;

export const Img = styled.img<{ open: boolean }>`
  padding: 0 0 0 0;
  margin: 0 10 0 0;
  width: 35px;
  height: 35px;
  display: block;
  justify-content: end;
  align-content: center;
  align-items: stretch;
`;

export const Button = styled.button`
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  align-content: center;

  background-color: #25cd89;
  color: #000;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
  margin: 3px 3px 3px 3px;
  border: 1px solid #ddffaa;
  border-radius: 5px;
  width: 96%;
  cursor: pointer;
  &:hover {
    background-color: #7df0c1;
  }
  span {
    // margin-left: 15px;
    margin: 0px 15px 0px 15px;
    display: inline-flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
  }
`;
