import styled from 'styled-components'

export const LayoutContainerApp = styled.div`
  max-width: 100%;
  margin: 0px 0px 0px 0px;
  height: 100%;
  background-color: transparent;
`

export const CardTitle = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 85%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  min-height: 35px;
  font-size: 18px;
`

export const Divs = styled.div`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  display: block;
  width: 920px;
`

export const LayoutContainerPage = styled(Divs)`
  border: 3px #000000 solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-flow: center;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`

export const LayoutHeaderPage = styled(Divs)`
  border: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 58px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const LayoutMainPage = styled(Divs)`
  border-top: 3px #000000 solid;
  border-bottom: 3px #000000 solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  flex-grow: 1;
  background-color: rgb(166, 181, 182);
  scroll-behavior: auto;
`

export const LayoutFooterPage = styled(Divs)`
  border: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
`
