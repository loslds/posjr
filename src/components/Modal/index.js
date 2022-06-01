import React, { Component, useCallback } from 'react'
import PropTypes from 'prop-types'
import { MainModal, MainContainer, ContainerCard, FlexCard } from './stayledModal'
import Title from './Title'
import Buttons from './Buttons'

export default function Modal({ title, onCloseModal, component, isOpen }) {
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

Modal.propTypes = {
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
  component: PropTypes.object,
  isOpen: PropTypes.bool
}

Modal.defaultProps = {
  title: '--',
  onCloseModal: () => {},
  component: any,
  isOpen: false
}
