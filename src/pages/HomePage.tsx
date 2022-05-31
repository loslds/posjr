import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerPage, ContainerPageFlexBetween, ContainerPageDoubleFlex, ContainerPageFlexLeft, ContainerPanelLogo, ContainerPageFlexWidth, ContainerPageTitleFlex, ContainerPanelImgMaim, ContainerPanelMainSnh } from './styledPage'
import { DivisionPanel } from './styledPage'
import { ButtonsImgBg } from '../components/buttons/stylesButtons'
import avatar1 from '../assets/images/avatar1.png'
import logosys from '../assets/images/logosys.png'
import semimg from '../../assets/images/semimg.png'
import logomain from '../assets/images/logomain.png'

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
        <ContainerPageFlexBetween>
          <ContainerPageDoubleFlex>
            <ContainerPageFlexLeft>
              <ContainerPanelLogo img={logosys}/>
              <h2>JR Bordados.</h2>
            </ContainerPageFlexLeft>
            <ContainerPageFlexWidth>
              <a>Logar</a>
              <button onClick={goto('/page1')}>Page 1</button>
              <button onClick={goto('/pagetitledouble')}>PageTitleDouble</button>
              <button onClick={goto('/pagetitlecenter')}>PageTitleCenter</button>
            </ContainerPageFlexWidth>
          </ContainerPageDoubleFlex>
          <DivisionPanel />
          <ContainerPageTitleFlex>
            <ContainerPanelImgMaim img={logomain}>

              <ContainerPanelMainSnh>Ola</ContainerPanelMainSnh>

            </ContainerPanelImgMaim>
          </ContainerPageTitleFlex>
        </ContainerPageFlexBetween>
      </ContainerPage>


      </div>
  )
}
