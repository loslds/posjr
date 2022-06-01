import styled from 'styled-components'

import semimg from '../../assets/images/semimg.png'
/**  */

export const MainModal = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  border: 2px red solid;
  border-radius: 20px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: white;
  color: black;
  top: 60px;
  position: fixed;
  width: 68%;
  height: 83%;
`

export const ContainerCard = styled.div`
  border: 0px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
`

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
