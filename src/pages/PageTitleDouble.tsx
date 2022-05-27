import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ContainerPage, ContainerPageFlex, ContainerPageDoubleFlex, DivisionPanel, ContainerPageFlexEnd } from './styledPage'

import { ContentButtonPageBg, ContentButtonPageEndBg, ContentButtonPageCenterBg, ContentButtonCtrlPage } from '../components/buttons/stylesButtons'

export const PageTitleDouble: React.FC = () => {
  const navigate = useNavigate()

  const goto = (path: string) => {
    return () => {
      navigate(path)
    }
  }

  return (
    <ContainerPage>
      <ContainerPageFlex>
        <ContainerPageDoubleFlex>
          <h1>Page Title Double</h1>
          <ContainerPageFlexEnd>
            <h1>Page Title End</h1>
            <ContentButtonPageCenterBg>
              <button onClick={()=>{}}>Menu</button>
            </ContentButtonPageCenterBg>
            <ContentButtonPageEndBg>
              <ContentButtonCtrlPage>
                <div>
                <button onClick={goto('/page1')}>Page 1</button>
                </div>
                <div>
                <button onClick={goto('/pageapp')}>Page App</button>
                </div>
              </ContentButtonCtrlPage>
            </ContentButtonPageEndBg>
          </ContainerPageFlexEnd>
        </ContainerPageDoubleFlex>
        <DivisionPanel />
        <ContentButtonPageBg>
          <button onClick={goto('/')}>Page Home</button>
        </ContentButtonPageBg>
        <ContentButtonPageBg>
          <button onClick={goto('/page1')}>Page 1</button>
        </ContentButtonPageBg>
        <ContentButtonPageBg>
          <button onClick={goto('/pagetitlecenter')}>PageTitleCenter</button>
        </ContentButtonPageBg>
        <ContentButtonPageBg>
          <button onClick={goto('/pageapp')}>Page App</button>
        </ContentButtonPageBg>
      </ContainerPageFlex>
    </ContainerPage>
  )
}
