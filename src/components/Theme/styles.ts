import styled from 'styled-components';

export const Container = styled.div`
  background-color: #02044a;
  color: #fff;
  min-height: 100vh;
  display: flex;
`;

export const Area = styled.div`
  margin: auto;
  min-width: 900px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Step = styled.div`
  flex: 1;
  display: flex;
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
