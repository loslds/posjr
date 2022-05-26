import styled from 'styled-components'

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
export const ContainerPageTitleFlex = styled.div`
  border: 2px yellow solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  background-color: transparent;
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
export const ContainerPanelFlex = styled.div`
  border: 2px greenyellow solid;
  width: 98%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 40px;
  font-size: 14px;
  background-color: transparent;
`
export const ContainerPanelText = styled.div`
  border: 2px #8284f1 solid;
  padding: 1px 5px 1px 5px;
  margin: 5px 5px 5px 5px;
  width: 98%;
  display: flex;
  flex-wrap: row wrap;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  h5 {
    margin-left: 25px;
    font-size: 10px;
    color: blue;
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
