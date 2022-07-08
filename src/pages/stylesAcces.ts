import styled from 'styled-components';

export const Container = styled.div`
  p {
    margin: 0px 5px 0px 5px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #b8b8d4;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 10 0 10 0;
  }
  label {
    margin: 0;
    padding: 0;
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 4px #25cd89 solid;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: #02044a;
    }
  }
  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    padding: 10px 20px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin: 5px 3px;
  }
`;
