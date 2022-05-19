import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer } from './styleLayout'

export const LayoutApp = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}

LayoutApp.propTypes = {
  children: PropTypes.any
}
LayoutApp.defaultProps = {
  children: null
}
