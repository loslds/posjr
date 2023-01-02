import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 0px 0px 0px;
  padding: 0px 3px 0px 0px;
  background-color: #02044a;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 900px;
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
  //display: flex;
  flex-wrap: wrap;
  flex: 0;
  padding: 3px 3px 5px 0px;
`;

export const SideBarArea = styled.div`
  /* border: 1px solid red; */
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 99%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-flow: column;
  align-content: center;
  align-items: stretch;
  font-style: normal;
  font-size: 13px;
  line-height: 15px;
`;

export const Page = styled.div`
  flex: 1;
  flex-wrap: wrap;
  min-width: 200px;
  padding: 3px 3px 0px 5px;
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
  /* font-size: 12px;
  line-height: 14px; */
  font-weight: bold;
  padding: 5px 5px 5px 5px;
  margin: 3px 3px 3px 3px;
  border: 1px solid #ddffaa;
  border-radius: 5px;
  width: 96%;
  cursor: pointer;
  &:hover {
    background-color: #7df0c1;
  }
  span {
    margin: 0px 15px 0px 15px;
    display: inline-flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
  }
`;
