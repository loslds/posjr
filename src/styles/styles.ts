import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      promaryColor: string;
      secundaryColor: string;
      textColor: string;
    };
  }
}

export const Container = styled.div`
  padding: 0px;
  margin: 0;
  width: 100vh;
  background: #ffff;
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
    color: #000;
  }
`;
