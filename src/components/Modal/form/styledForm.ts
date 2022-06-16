import styled from 'styled-components';

import semimg from '../../../assets/images/semimg.png';

/** Styled MainForm */
export const ContainerForm = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 93%;
  background-color: #faf3b1;
  color: black;
  display: flex;
`;

export const ContainerFormFlex = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: black;
  display: flex row;
  flex-wrap: nowrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`;
/** styled Card form */
export const ContainerCardForm = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  background-color: transparent;
  display: flex;
`;

export const ContainerCardFormFlex = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
/** Title form */
export const ContainerFormTitle = styled.div`
  border: none; /* border: 1px green dashed; */
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: black;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  h1,
  h2,
  h3 {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
    text-decoration-color: #727272;
  }
  h1 {
    text-decoration: 3px underline;
  }
  h2 {
    text-decoration: 2px underline;
  }
  h3 {
    text-decoration: 1.5px underline;
  }
`;

export const ContainerFormAvatar = styled.div<{ img?: string }>`
  border: none; /* border: 2px red solid; */
  height: 130px;
  width: 120px;
  padding: 0px 0px 0px 0px;
  margin: 10px 5px 10px 0px;
  display: flex;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
