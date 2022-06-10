import React, { useCallback, useState } from 'react'
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { ContainerPage,
  ContainerPageFlexBetween,
  ContainerPageDoubleFlex,
  ContainerPageFlexLeft,
  ContainerPanelLogo,
  ContainerPageFlexWidth,
  ContainerPageMainFlex,
  ContainerPanelImgMaim,
  ButtonLogin } from './styledPage'
import { DivisionPanel } from './styledPage'
import logosys from '../assets/images/logosys.png'
import logomain from '../assets/images/logomain.png'
import loginbrc from '../assets/images/loginbrc.png'

import Modal from '../components/Modal'


export const HomePage: React.FC<PropertyDescriptorMap> = () => {

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
              <ButtonLogin img={loginbrc} onClick={handleSendClickModal}/>
            </ContainerPageFlexWidth>
          </ContainerPageDoubleFlex>
          <DivisionPanel />
          <ContainerPageMainFlex>
            <ContainerPanelImgMaim img={logomain} title={'Logar...'} />
          </ContainerPageMainFlex>
          </ContainerPageFlexBetween>
        </ContainerPage>
        { isVisibleModal ? <Modal  onClose={handleSendClickModal } /> : null }
      </div>
  )
}
