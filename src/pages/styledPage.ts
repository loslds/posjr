import { App } from './../App';

import styled from 'styled-components'

import ImgSrc from "../assets/images/logo-sgb.png"

export const ContainerPanelPageBg = styled.div`
  border: 2px #8284f1 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 100%;
  min-height: 100%;
  display: flex-1;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 12px;
  background-image: url(${ImgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
export const ContainerPage = styled.div`
  border: 2px violet solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 12px;
`
export const ContainerPageFlex = styled.div`
  border: 2px #f80606 dotted;
  width: 900px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
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
`
export const DivisionPanel = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 1px;
  width: 98%;
  display: flex;
  background-color: #7f7fbb;
`
// painel para titulo centralizado unico
export const ContainerPageTitleFlex = styled.div`
  border: 0px;
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
  h1,h2,h3 {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px ;
    text-decoration: 3px underline;
    text-decoration-color: cyan;
  }
`

// painel para testo duplo
export const ContainerPageDoubleFlex = styled.div`
  border: 2px greenyellow solid;
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
  h1,h2,h3 {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px ;
    text-decoration: 3px underline;
    text-decoration-color: cyan;
  }
`
export const ContainerPageFlexEnd = styled.div`
  border: 1px yellowgreen dashed;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: Calc(40%/2)-10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`

export const ContainerPanelText = styled.div`
  border: 1px #8284f1 solid;
  border-radius: 10px;
  padding: 1px 5px 1px 5px;
  margin: 5px 5px 5px 5px;
  width: 98%;
  display: flex;
  flex-wrap: row wrap;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;

  h1,h2,h3 {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px ;
    color: black;
    text-decoration: 3px underline;
    text-decoration-color: rgb(96,96,96);
  }

`
export const ContainerPanelTextFlex = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;

`
export const ContainerPanelItem = styled.div`
  border: 2px rgb(90,90,90) solid;
  border-radius: 8px;
  padding: 1px 1px 1px 1px;
  margin:  5px 5px 5px 5px;
  height: 150px;
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: black;
`
export const ContainerPanelAvatar = styled.div`
  border: 2px green solid;
  padding: 1px 1px 1px 1px;
  margin:  1px 1px 1px 1px;
  height: 80px;
  width:  100%;
  display: flex;
  grid-column-start: auto;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: black;
`
export const ImagePanelAvatar = styled.image`
  border: 1px red solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`
