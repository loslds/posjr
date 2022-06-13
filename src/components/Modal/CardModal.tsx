import React from 'react'
import styled from 'styled-components'

const ContainerCard = styled.div`
  border-bottom: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  display: flex ;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #d6d6d6;
`
const ContainerCardFlex = styled.div`
  border: none;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: transparent;
`

type Props = {
  id?: string;
  children?: null;
}

const CardModal: React.FC<Props> = (id, children) => {
  return (
    <div>
      <ContainerCard>
        <ContainerCardFlex>
          {children}
        </ContainerCardFlex>
      </ContainerCard>
    </div>
  )
}

export default CardModal;
