import styled from 'styled-components';

// import img from '../assets/images/olhoa.png';

export const Container = styled.div`
  // 01
  p {
    margin: 0px 0px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #b8b8d4;
  }
  h1 {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 1px 0px 6px -3px;
    padding: 0px 0px 8px 0px;
  }
  label {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    input {
      display: block;
      margin-top: 7px;
      margin-left: 15px;
      box-sizing: border-box;
      width: 98%;
      padding: 20px 10px;
      border: 4px #25cd89 solid;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: #02044a;
      div {
        display: flex;
        width: 25px;
        height: 25px;
        //  background-image: url($ /*{img}*//*);*/
        /* background-repeat: no-repeat;
        background-attachment: fixed;
        justify-content: center;
        align-content: center;
        align-items: center; */
      }
    }
  }
  button {
    background-color: #25cd89;
    color: #000;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin: 10px 0px 10px 15px;
    padding: 10px 20px;
    &:hover {
      background-color: #7df0c1;
      border: 1px solid #ddffaa;
    }
  }
`;

export const DivImg = styled.div<{ open: boolean }>`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  width: 25px;
  height: 25px;
  display: block;
  justify-content: center;
  align-content: center;
  align-items: stretch;
`;
