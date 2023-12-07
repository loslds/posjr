import styled from 'styled-components';

//import semimg from '../assets/images/semimg.png';

export const Container = styled.div`
  border: 2px solid red;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 99%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: white;
  background-color: beige;

  p {
    margin: 0px 0px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #fff;
    display: flex;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    color: #000;
    font-style: normal;
  }
  h1 {
    font-size: 22px;
    line-height: 24px;
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

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 1px 0px 6px -3px;
    padding: 0px 0px 8px 0px;
  }
  label {
    margin: 0px 0px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #fff;
  }
  button {
    background-color: #25cd89;
    color: #000;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin: 10px 0px 10px 15px;
    padding: 10px 20px;
    &:hover {
      background-color: #7df0c1;
    }
  }
`;
