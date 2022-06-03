import styled from 'styled-components'

import semimg from '../../assets/images/semimg.png'
/**  */
export const MainModal = styled.div`
  position: absolute;
  border: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
export const MainContainer = styled.div`
  border: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  background-color: white;
  color: black;
  top: 62px;
  position: fixed;
  width: 66.3%;
  height: 90%;
  display: flex row;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

`
export const ContainerCard = styled.div`
  border-bottom: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 50px;
  display: flex ;
  flex-flow: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: #d6d6d6;
`
export const ContainerModalCenter = styled.div`
  border: 1px black dashed;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  max-width: Calc(40%/2)-10px;
  height: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
export const ContainerModalButton = styled.div`
  border: 1px white dashed;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  max-width: Calc(40%/2)-10px;
  height: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: transparent;
`
export const ButtonClose = styled.button<{ img?: string}>`
  border: 0;
  padding: 1px 1px 1px 1px;
  margin: 10px 10px 10px 10px;
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
  align-items: center ;
`



// ++++++++++++++++++++++++++++++++++


export const FlexCard = styled.div`
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
`

export const CardTitle = styled.div`
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
`

export const ContainerButton = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  min-width: 6%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`

export const ButtonModal = styled.button<{ img?: string}>`
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
`
