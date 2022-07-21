import styled from 'styled-components';

// import olhof from '../assets/images/olhof.png';

export const Container = styled.div`
  // 01
  p {
    margin: 0px 0px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #b8b8d4;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
  }
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 14px;
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

export const DivImg = styled.div`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  border: 1px solid #ff0000;
  width: 35px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ButtonImg = styled.button`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  border: 1px solid #ff0000;
  width: 35px;
  min-height: 30px;
  display: block;
  justify-content: end;
  align-content: center;
  align-items: center;
`;

export const ContainerPW = styled.div<{ selected: boolean }>`
  background-color: transparent;
  border: 4px solid ${props => (props.selected ? '#25cd89' : '#16195c')};
  border-radius: 10px;
  padding: 5px 5px 5px 5px;
  margin: 5px 0px 5px 15px;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  &:hover {
    // border: 2px #495459 solid; #b8b8d4
    border: 4px solid #c5fa75;
  }
  h5 {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 5px;
    color: #fff;
    font-size: 18px;
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
`;

export const BoxButton = styled.div<{ open: boolean }>`
  border: 2px solid ${props => (props.open ? '#25cd89' : '#16195c')};
  border-radius: 10px;
  padding: 0 0 0 0;
  margin: 5px 0px 0 10px;
  width: 98%;
  min-height: 25px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-content: center;
  align-items: center;
  &:hover {
    border: 2px solid #ddffaa;
    margin: 5px 0px 0px 10px;
  }
`;

export const DivPosImg = styled.div`
  border: 1px solid #ff0000;
  margin: 0px 10px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 40px;
  min-height: 40px;
  display: flex;
  justify-content: end;
  align-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

// display: ${({ondisplay }) => (ondisplay ? 'flex' : 'none')};

// export const DivtoSpan = styled.div<{ open?: boolean }>`
//   margin: 0px 10px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   max-width: 100px;
//   background-color: transparent;
//   font-size: 16px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;