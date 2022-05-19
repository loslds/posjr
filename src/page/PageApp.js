// import logo from './logo.svg';
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading'
import useIsMountedRoot from '../hooks'
import "./App.css";

function PageApp() {

  const [isButton, setIsButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const isMountedRoot = useIsMountedRoot()

  const { push } = useHistory()

  const fetchRoots = useCallback( () => {
    setIsLoading(true)
    if (isMountedRoot.current) {
      setIsLoading(false)
    }
  }, [isMountedRoot])

  useEffect(() => {
    fetchRoots()
  }, [fetchRoots])

  const btn = document.getElementById('send')
  
  btn.addEventListener('click', () => {
      btn.classList.add('is-loading')
      // fake API call
      setTimeout(() => {
        btn.classList.add('is-success')
        btn.classList.remove('is-loading')
      }, 4000)
      setIsButton(true)
    }
  )
  
  return (
    
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div class="box-button">
          <h5>"Bem Vindo ao Sistema."</h5>
          <button id="send" class="send"><span>Acessar.</span></button>
        </div>
      </header>
      { isLoading ? <Loading /> : null}
      { isButton ? push('/') : null }
    </div>
  );
}

export default PageApp;
