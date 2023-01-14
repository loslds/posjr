import styled from 'styled-components';

// import ImgSrc from '~/assets/images/logosgb.png';
import semimg from '~/assets/images/semimg.png';

export const ContainerPageR = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
`;

export const ContainerPage = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  background-color: Transparent;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 12px;
`;

export const ContainerPageFlexBetween = styled.div`
  border: 0px;
  width: 900px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: Transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  max-height: 100%;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`;

export const DivisionPanel = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 1px;
  width: 98%;
  display: flex;
  background-color: #7f7fbb;
`;
// panel para titulo centralizado único
export const ContainerPageMainFlex = styled.div`
  border: 0px; /*1px red dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 55px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  background-color: transparent;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
    text-decoration: 3px underline;
    text-decoration-color: cyan;
  }
`;
// panel para testo duplo
export const ContainerPageDoubleFlex = styled.div`
  border: 0px; /*  2px greenyellow solid; */
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 55px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: white;
  background-color: transparent;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    color: #fff;
    font-style: normal;
    text-decoration: 3px underline;
    text-decoration-color: cyan;
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
`;
export const ContainerPageFlexWidth = styled.div`
  border: 0px; /*1px yellowgreen dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 0px;
  width: Calc(45% / 2)-10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  background-color: transparent;
  label {
    padding: 0px 5px 0px 5px;
    margin: 0px 10px 0px 10px;
    font-size: 12pt;
    font-style: normal;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`;
export const ContainerPageFlexLeft = styled.div`
  border: 0px; /*1px yellowgreen dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 0px;
  max-width: Calc(40% / 2)-10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  background-color: transparent;
`;
export const ContainerPanelLogo = styled.div<{ img?: string }>`
  border: 0px; /*1px yellow dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  min-height: 50px;
  width: 130px;
  display: flex;
  background-color: whitesmoke;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const ContainerPanelImgMaim = styled.div<{ img?: string }>`
  border: 0px; /*1px yellow dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 570px;
  width: 100%;
  display: flex;
  background-color: whitesmoke;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ContainerPageFlexEnd = styled.div`
  border: 1px red dashed;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: Calc(40% / 2)-10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`;

export const ButtonLogin = styled.button<{ img?: string }>`
  border: 0px; /*1px white solid;*/
  padding: 1px 1px 1px 1px;
  margin: 0px 10px 0px 10px;
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
  min-height: 45px;
  width: 45px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerPanelTextFlex = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 5px 5px 5px 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const ContainerPanelItemMain = styled.div`
  border: 2px rgb(90, 90, 90) solid;
  border-radius: 8px;
  padding: 1px 1px 1px 1px;
  margin: 5px 5px 5px 5px;
  height: 150px;
  width: 150px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row column;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const ContainerPanelAvatar = styled.div`
  border: 2px green solid;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 50%;
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  color: black;
`;
