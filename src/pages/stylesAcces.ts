import styled from 'styled-components';

import semimg from '../assets/images/semimg.png';

export const Container = styled.div`
  p {
    margin: 0px 0px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #b8b8d4;
    display: flex;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    color: #fff;
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

    span {
      margin: 0px 15px 0px 15px;
      display: inline-flex;
      flex-flow: nowrap;
      position: relative;
      justify-content: flex-end;
      align-content: center;
      align-items: center;
    }
    input {
      //border: 2px solid #25cd89;
      //border-radius: 10px;
      border: 0;
      border-left: 2px solid #25cd89;
      border-right: 2px solid #25cd89;
      border-radius: 5%;
      display: flex;
      margin: 0px 0px 0px 40px;
      padding: 10px 10px 10px 8px;
      // box-sizing: border-box;
      width: 80%;
      background-color: transparent; // #02044a;
      outline: 0;
      color: #fff;
      font-size: 14px;
      line-height: 16px;
    }
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

export const DivImgLeft = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 0px;
  border-left: 2px solid #25cd89;
  width: 42px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
// ///////////////////////////////////////////

export const ContainerPW = styled.div`
  background-color: transparent;
  border: 2px solid #25cd89;
  border-radius: 10px;
  padding: 5px 5px 5px 5px;
  margin: 3px 0px 3px 15px;
  min-height: 50px;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  h5 {
    border: 0px;
    margin: 0px 0px 0px 3px;
    padding: 0px 10px 0px 2px;
    background-color: transparent;
    color: #ffffff;
    font-size: 15px;
    line-height: 25px;
    font-style: normal;
    // font-weight: bold;
  }
  p {
    padding: 0px 0px 0px 0px;
    margin: 0px 4px 0px 0px;
    background-color: transparent;
    color: #b8b8d4;
  }
`;
export const ContainerPWFlex = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const ContainerPWCard = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 15px;
  width: 100%;
  min-height: 45px;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background-color: transparent;
`;

export const ContainerPWEnd = styled.div`
  border: 0px;
  padding: 0px 0px 0px 10px;
  margin: 2px 0px 2px 15px;
  min-height: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`;

export const DivPWS = styled.div<{ open?: boolean }>`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  border: 1px solid #ff0000;
  width: 150px;
  min-height: 28px;
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: left;
  // align-content: center;
  align-items: center;
`;

type PropsBtnPw = {
  img?: string;
  onClick: () => void;
  open?: boolean;
};
export const BoxButtonPW = styled.div<PropsBtnPw>`
  border: 2px solid ${props => (props.open ? '#25cd89' : '#16195c')};
  border-radius: 50%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 45px;
  height: 45px;
  display: flex;
  flex-flow: wrap;
  background-color: #7df0c1;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: center;
  cursor: pointer;
  outline: none;

  /* display: flex;
  justify-content: center;
  align-content: center;
  align-items: center; */
  &:hover {
    border: 2px solid #ddffaa;
  }
`;

export const DivPosImg = styled.div`
  border: 1px solid #ff0000;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 0px 0px;
  min-width: 35px;
  min-height: 35px;
  display: flex;
  position: relative;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: transparent;
  // font-size: 16px;
`;

type PropsButtonImg = {
  img?: string;
  onClick: () => void;
};
export const ButtonImg = styled.button<PropsButtonImg>`
  border: 0px solid #fff;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 35px;
  min-height: 35px;
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
