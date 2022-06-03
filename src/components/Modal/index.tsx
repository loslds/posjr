import React, {useState} from "react";

import { MainModal,
  MainContainer,
  ContainerCard,
  ContainerModalCenter,
  ContainerModalButton,
  ButtonClose
} from './styledModal'

import close from '../../assets/images/closebrc.png'

type sendmodal {
  onCloseModal:() => void;
}

const Modal: React.FC<sendmodal> = (onCloseModal = () => {}) => {
  return(
    <MainModal>
      <MainContainer>
        <ContainerCard>
          <ContainerModalCenter>
            <h2>bar</h2>
          </ContainerModalCenter>
          <ContainerModalButton>
            <ButtonClose onClick={ onCloseModal} img={close} title={'Fechar...'}/>
          </ContainerModalButton>
        </ContainerCard>
        <h1>Corpo component</h1>
      </MainContainer>
    </MainModal>
  )
}

export default Modal;
