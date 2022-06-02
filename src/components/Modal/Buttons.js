import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButton, ButtonModal } from './styledModal'

// import send from '../../../assets/images/enviar.svg'
import close from '../../assets/images/close.png'

export default function Buttons({ onClick }) {
  return (
    <ContainerButton>
      <ButtonModal img={close} title="Fechar..." onClick={onClick} />
    </ContainerButton>
  )
}

Buttons.defaultProps = {
  onClick: () => {}
}
Buttons.propTypes = {
  onClick: PropTypes.func
}
