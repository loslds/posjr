import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerPage, ContainerPageFlexBetween, ContainerPageDoubleFlex, ContainerPageFlexLeft, ContainerPanelLogo, ContainerPageFlexWidth, ContainerPageTitleFlex, ContainerPanelImgMaim, ContainerPanelMainSnh, ButtomBarAccess } from './styledPage'
import { DivisionPanel } from './styledPage'
import { ButtonsImgBg } from '../components/buttons/stylesButtons'

//import avatar1 from '../assets/images/avatar1.png'
import logosys from '../assets/images/logosys.png'
//import semimg from '../../assets/images/semimg.png'
import logomain from '../assets/images/logomain.png'



export const HomePage: React.FC = () => {

  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleSendClickModal = useCallback(() => {
    setIsVisibleModal(oldState => {
      return !oldState
    })
  }, [])

  const navigate = useNavigate()

  const goto = (path: string) => {
    return () => {
      navigate(path)
    }
  }

   console.log('isVisibleModal : ', isVisibleModal)

  return (
    <div>
      <ContainerPage>
        <ContainerPageFlexBetween>
          <ContainerPageDoubleFlex>
            <ContainerPageFlexLeft>
              <ContainerPanelLogo img={logosys}/>
              <h2>JR Bordados.</h2>
            </ContainerPageFlexLeft>
            <ContainerPageFlexWidth >
              <ButtomBarAccess onClick={handleSendClickModal} />
              {isVisibleModal ? (<h1>acessou</h1> ) : null}
              {/* <button onClick={goto('/page1')}>Page 1</button>
              <button onClick={goto('/pagetitledouble')}>PageTitleDouble</button>
              <button onClick={goto('/pagetitlecenter')}>PageTitleCenter</button>*/}
            </ContainerPageFlexWidth>
          </ContainerPageDoubleFlex>
          <DivisionPanel />
          <ContainerPageTitleFlex>
            <ContainerPanelImgMaim img={logomain} />
          </ContainerPageTitleFlex>
         {/*      <h2>Entrei</h2>

            </ContainerPanelMainSnh>

            </ContainerPanelImgMaim>
          */}
        </ContainerPageFlexBetween>
      </ContainerPage>


      </div>
  )
}
