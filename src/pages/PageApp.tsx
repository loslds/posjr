import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import cx from 'classnames'
import styled from 'styled-components'

const Button = styled.button<{ loading?: boolean }>`
  background-color: ${({ loading }) => (loading ? '#000' : '#f00')};
`

// import useIsMountedRoot from '../hooks'
// import Loading from '../Loading'

export const PageApp: React.FC = () => {
  const [isButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  // const isMountedRoot = useIsMountedRoot()

  const navigate = useNavigate()

  // const fetchRoots = useCallback(() => {
  //   setIsLoading(true)
  //   if (isMountedRoot.current) {
  //     setIsLoading(false)
  //   }
  // }, [isMountedRoot])

  // useEffect(() => {
  //   fetchRoots()
  // }, [fetchRoots])

  // const btn = document.getElementById('send')

  const handleClick = () => {
    setIsLoading(true)
    setIsSuccess(false)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 4000)
    //
  }
  // btn.addEventListener('click', () => {
  //   btn.classList.add('is-loading')
  //   // fake API call
  //   setTimeout(() => {
  //     btn.classList.add('is-success')
  //     btn.classList.remove('is-loading')
  //   }, 4000)
  //   setIsButton(true)
  // })

  const classes = cx({ loading: !!isLoading, success: !!isSuccess })

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="box-button">
          <h5>{'"Bem Vindo ao Sistema."'}</h5>
          <Button className={classes} onClick={handleClick} disabled={!!isLoading} loading={isLoading}>
            <span>{isLoading ? 'carregando...' : 'Acessar'}</span>
          </Button>
        </div>
      </header>
      {/* {isLoading ? <Loading /> : null} */}
      {/* {isButton ? push('/') : null} */}
    </div>
  )
}
