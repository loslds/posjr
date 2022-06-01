import React from 'react'
import PropTypes from 'prop-types'
import { CardTitle } from './styledModal'

export default function Title({ title }) {
  return (
    <CardTitle>
      <h3>{title}</h3>
    </CardTitle>
  )
}
Title.propTypes = {
  title: PropTypes.string.isRequired
}
