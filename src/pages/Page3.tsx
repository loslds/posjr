import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ContainerPage, ContainerPageFlex, ContainerPageTitleFlex, DivisionPanel } from './styledPage'

export const Page3: React.FC = () => {
  const navigate = useNavigate()

  const goto = (path: string) => {
    return () => {
      navigate(path)
    }
  }

  return (
    <ContainerPage>
      <ContainerPageFlex>
        <ContainerPageTitleFlex>
          <h3>Page 3</h3>
        </ContainerPageTitleFlex>
        <DivisionPanel />
        <button onClick={goto('/')}>Page Home</button>
        <button onClick={goto('/page1')}>Page 1</button>
        <button onClick={goto('/page2')}>Page 2</button>
        <button onClick={goto('/pageapp')}>Page App</button>
      </ContainerPageFlex>
    </ContainerPage>
  )
}
