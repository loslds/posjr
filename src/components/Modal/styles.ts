import styled from 'styled-components';

import semimg from '~/assets/images/semimg.png';

/////////////// inicio MainModal

export const Content = styled.div`
  position: fixed;
  border: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 85vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 100;
  color: white;
  background-color: rgba(0, 0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
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
type PropsMain = {
  top?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
};
export const ContainerModal = styled.div<PropsMain>`
  border: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  background-color: white;
  color: black;
  top: 62px;
  position: fixed;
  width: 66.3%;
  height: 87%;
  display: flex row;
  flex-wrap: nowrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`;
/////////////// fim MainModal
/////////////// inicio CardMocal
export const ContainerCard = styled.div`
  border-bottom: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 35px;
  background-color: transparent;
  /* background-color: #d6d6d6; */
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ContainerCardFlex = styled.div`
  border: 1px solid red;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: transparent; //* black;*/
  display: flex;
  flex-flow: wrap;
  justify-content: center; /*space-around;*/
  align-content: center;
  align-items: center;
`;
///////////////// fim CardModal

///////////////// inicio TitleModal
export const ContainerModalTitle = styled.div`
  border: 0px; /*1px green dashed;*/
  padding: 0px auto;
  margin: 0px auto;
  min-width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
////////////////// fim TitleModal
///////////////// inicio ButtonModal
export const ContainerButtonModal = styled.div`
  border: 0px; /*1px red dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  min-width: 15%; /*max-width: Calc(40%/2)-10px;*/
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
  color: black;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
`;

export const ButtonModalImg = styled.button<{ img?: string }>`
  border: 0;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 35px;
  width: 35px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
////////////////////////////////////////

// ++++++++++++++++++++++++++++++++++

export const FFlexCard = styled.div`
  border: none;
  min-height: 40px;
  width: 100%;
  padding: 2px 5px 2px 5px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: transparent;
  div {
    padding: 0px 5px 0px 5px;
    margin: 0px 0px 0px 0px;
  }
`;

export const CCardTitle = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  min-width: 85%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  font-size: 18px;
`;

export const CContainerButton = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  min-width: 6%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

export const BButtonModal = styled.button<{ img?: string }>`
  margin: 2px 4px 2px 4px;
  padding: 2px auto;
  display: block;
  width: 40px;
  height: 40px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
