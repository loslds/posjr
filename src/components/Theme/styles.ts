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
  width: 25px;
  height: 25px;
  display: block;
  justify-content: end;
  align-content: center;
  align-items: stretch;
`;
