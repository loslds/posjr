import React, { useCallback, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled,{css} from 'styled-components'
import MainModal from './MainModal'
import CardModal from './CardModal'
import TitleModal from './TitleModal'
import CardButtonsModal from './CardButtonsModal'
import ButtonModal from './ButtonModal'
import ImgClose from '../../assets/images/close.png'




type Props = {
  isOpen: boolean;
  close: () => void;
  click: () => void;
  titulo?: string;
  root?: string;
  children: any;
  id1?: string;
  id2?: string;
}


const Modal: React.FC<Props> = ({ isOpen, id1='idmodal1', id2='idmodal2', click, close, root='/', titulo='Titulo' }) => {

  if (!isOpen) return null

  const navigate = useNavigate()

  const goto = (path: string) => {
    return () => {
      navigate(path)
    }
  }


    return(
      <div >
        <MainModal { isOpen= {isOpen } >
          <CardModal >
            <TitleModal titulo='titulo'/>
            <CardButtonsModal>
              <ButtonModal img={ImgClose} title={"Fechar..."} onClick={close}/>
            </CardButtonsModal>
          </CardModal>
          { goto( root ) }
        </MainModal>
      </div>
    )
  }

  export default Modal;


        // <ContainerModal>
        //   <ContainerCard>
        //     <ContainerCardFlex>
        //       <ContainerModalTitle>
        //         <h2>Titulo</h2>
        //       </ContainerModalTitle>
        //       <ContainerModalButton>
        //         <ButtonModal img={ImgClose} title={"Fechar..."} onClick={close}/>
        //       </ContainerModalButton>
        //     </ContainerCardFlex>
        //   </ContainerCard>
        //   { goto(root) }
        //   <h1>corpo modal</h1>
        // </ContainerModal>
