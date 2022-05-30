import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerPage, ContainerPageFlex, ContainerPageTitleFlex, ContainerPanelText, ContainerPanelItem, ContainerPanelAvatar } from './styledPage'
import { DivisionPanel } from './styledPage'
import { ButtonsImg150 } from '../components/buttons/stylesButtons'
import avatar1 from '../assets/images/avatar1.png'

export const HomePage: React.FC = () => {


  const navigate = useNavigate()

  const goto = (path: string) => {
    return () => {
      navigate(path)
    }
  }

  return (
    <div>
      <ContainerPage>
        <ContainerPageFlex>
          <ContainerPageTitleFlex>
            <h1>Bem Vindo ao P.O.S. JR.Bordados</h1>
          </ContainerPageTitleFlex>
          <DivisionPanel />
          <ContainerPanelText>
            <ContainerPageTitleFlex>
              <h1>Usuário.</h1>
            </ContainerPageTitleFlex>
            <ContainerPageTitleFlex>
              <ContainerPanelItem>
                <ContainerPanelAvatar>
                  <ButtonsImg150 img={avatar1}/>
                  <label>Item1</label>
                  <label>Item11</label>
                </ContainerPanelAvatar>
              </ContainerPanelItem>
              <label>Item1</label>
            </ContainerPageTitleFlex>
            <ContainerPanelItem>item 2</ContainerPanelItem>
            <ContainerPanelItem>item 3</ContainerPanelItem>
            <ContainerPanelItem>item 4</ContainerPanelItem>
            <ContainerPanelItem>item 5</ContainerPanelItem>
          </ContainerPanelText>
        </ContainerPageFlex>
      </ContainerPage>

      <button onClick={goto('/page1')}>Page 1</button>
      <button onClick={goto('/pagetitledouble')}>PageTitleDouble</button>
      <button onClick={goto('/pagetitlecenter')}>PageTitleCenter</button>
      </div>
  )
}
