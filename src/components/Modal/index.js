import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { MainModal, MainContainer, ContainerCard, FlexCard } from './stayledModal'
import Title from './Title'
import Buttons from './Buttons'

interface ModalProps {
  onCloseModal: () => void,
  title: string,
  isOpen: bool,
  component: object
  children: any
}

export const Modal: React.FC<ModalProps> = ({ title, onCloseModal, component, isOpen, children} ) => {

  // ...
  const handleClose = useCallback(
    e => {
      e.stopPropagation()
      onCloseModal()
    },

    [onCloseModal]
  )

  return (
    <MainModal onClick={handleClose} isOpen={isOpen}>
      <MainContainer
        onClick={e => {
          e.stopPropagation()
        }}
        >
        <ContainerCard>
          <FlexCard>
            <Title title={title} />
            <Buttons onClick={handleClose} />
          </FlexCard>
        </ContainerCard>
      </MainContainer>
    </MainModal>
  )
}
