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
export const ContainerInput = styled.div`
  border: 2px solid #25cd89;
  border-radius: 10px;
  margin: 0px 0px 2px 15px;
  padding: 0px 0px 0px 2px;
  width: 90%;
  display: inline-flex;
  justify-content: center;
  align-content: center;
`;
export const SideImgInputLeft = styled.div`
  border: 0;
  border-right: 2px solid #25cd89;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 7%;
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: center;
  align-items: center;
  span {
    margin: 8px 8px 8px 8px;
    padding: 0px 0px 0px 0px;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 30px;
    color: #25cd89;
  }
`;

export const SideImgInputRight = styled.div`
  border: 0;
  border-left: 2px solid #25cd89;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 7%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: right;
  align-content: center;
  align-items: center;
  span {
    margin: 8px 8px 8px 8px;
    padding: 0px 0px 0px 0px;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 30px;
    color: #07fa00;
  }
`;
export const SideInputCenter = styled.div`
  border: 0px; /**1px dashed green;*/
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  input {
    border: 0;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    display: flex;
    width: 100%;
    background-color: transparent; // #02044a;
    outline: 0;
    color: #fff;
    font-size: 18px;
    line-height: 20px;
  }
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

export const EscalaProgress = styled.div<{ width?: string; color?: string }>`
  border: 1px solid rgba(184, 184, 212, 1);
  // border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 20px;
  height: 10px;
  width: 100px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: column;
  align-items: flex-start;
  div {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    height: 10px;
    width: ${props => (props.width ? 'width' : '0px')};
    display: block;
    background-color: ${props => (props.color ? 'color' : 'transparent')};
  }

  background-color: transparent; /*rgba(184, 184, 212, 0.2);*/
  font-size: 14px;
  color: white;
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

type PropsProgr = {
  open?: boolean;
  onClick: () => void;
};
export const CheckOnClickProgress = styled.div<PropsProgr>`
  border: 0px; /** 1px solid red;  rgba(184, 184, 212, 1);*/
  border-radius: 50%;
  padding: 5px 5px 5px 5px;
  margin: 3px 10px 3px 10px;
  height: 23px;
  width: 23px;
  background-color: rgba(190, 198, 209, 0.3);
  color: white;
  font-size: 23px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: center;
  align-items: flex-start;
  cursor: pointer;
  outline: none;
`;

export const DivPesoProgress = styled.div`
  border: 1px solid rgba(184, 184, 212, 1);
  border-radius: 50%;
  padding: 5px 3px 5px 3px;
  margin: 2px 0px 0px 20px;
  height: 20px;
  width: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: column;
  align-items: flex-start;
  cursor: pointer;
  outline: none;
`;
