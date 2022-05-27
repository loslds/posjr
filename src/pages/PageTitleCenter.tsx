import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ContainerPage, ContainerPageFlex, ContainerPageTitleFlex, DivisionPanel } from './styledPage'

import { ContentButtonPageBg } from '../components/buttons/stylesButtons'

export const PageTitleCenter: React.FC = () => {
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
          <h1>Page Title Center</h1>
        </ContainerPageTitleFlex>
        <DivisionPanel />
        <ContentButtonPageBg>
          <button onClick={goto('/')}>Page Home</button>
        </ContentButtonPageBg>
        <ContentButtonPageBg>
          <button onClick={goto('/page1')}>Page 1</button>
        </ContentButtonPageBg>
        <ContentButtonPageBg>
          <button onClick={goto('/pagetitledouble')}>Page Title Double</button>
        </ContentButtonPageBg>
        <ContentButtonPageBg>
          <button onClick={goto('/pageapp')}>Page App</button>
        </ContentButtonPageBg>
      </ContainerPageFlex>
    </ContainerPage>
  )
}
