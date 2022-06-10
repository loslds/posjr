import React, { useCallback, useEffect, useState} from 'react'
import ReactDom from 'react-dom'
import styled,{css} from 'styled-components'
import PropTypes from 'prop-types'
import { MainModal, ContainerModal, ContainerCard, ContainerCardFlex, ContainerModalTitle, ContainerModalButton, ButtonModal } from './styledModal'
import ImgClose from '../../assets/images/close.png'


export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}



interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
}

const Modal: React.FC<ModalProps> = ( toggle, isOpen, children ) => {


  
  const handleClose = useCallback( e => {
      e.stopPropagation()
      onClose()
    },
    [handleClose]
  )



  return(
    <div>
      <MainModal id= {"loadmodal"} onClick={handleClose}>
        <ContainerModal
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <ContainerCard>
            <ContainerCardFlex>
              <ContainerModalTitle>
                <h2>Titulo</h2>
              </ContainerModalTitle>
              <ContainerModalButton>
                <ButtonModal img={ImgClose} title={"Fechar..."} onClick={onClose}/>
              </ContainerModalButton>
            </ContainerCardFlex>
          </ContainerCard>
          <h1>corpo modal</h1>
        </ContainerModal>
      </MainModal>
    </div>
    )
  }

  export default Modal;

  type: {
    titulo: PropTypes.string;
    isOpen: PropTypes.bool;
    handleClose: PropTypes.func;
    onClose:PropTypes.func;
    children: PropTypes.any;
    isOpen: PropTypes.bool
  }
  
  // Modal.defaultProps = {
  //   titulo: '--',
  //   handleClose: () => {},
  //   onClose:: () => {},
  //   children: any,
  //   isOpen: false
  // }
  






// import close from '../../assets/images/closebrc.png'
// import './modal.css'

// export const useModal = () => {
//   const [isShowing, setIsShowing] = useState(false);

//   function toggle() {
//     setIsShowing(!isShowing);
//   }

//   return {
//     isShowing,
//     toggle,
//   }
// }


// interface ModalProps {
//   isShowing: boolean;
//   toggle: () => void;
//   children: any;
// }
// const Modal: React.FC<ModalProps> = ({ isShowing, toggle, children }) => {

//   useEffect(() => {
//     const listner = function (e: KeyboardEvent ) {
//       if (e.key === 'Escape' || e.key === 'Esc' ) {
//         e.preventDefault();
//         e.stopPropagation();

//         isShowing && toggle();
//       }
//     }

//     window.addEventListener('keyup', listner)

//     return (() => {
//       window.removeEventListener('keyup', listner)
//     })

//   }, [isShowing, toggle])

//   return (
//     isShowing ? ReactDom.createPortal(
//       <div className="modal-overlay">
//         <div className="modal-wrapper">
//           <div className="modal">
//             {children}
//           </div>
//         </div>
//       </div>, document.body
//     ) : null
//   )
// }

// interface ModalHeaderProps {
//   toggle: () => void;
//   children: any;
// }

// export const ModalHeader: React.FC<ModalHeaderProps> = ({ toggle, children }) => (
// 	<div className="modal-header">
// 		{children || 'Title'}
//     <button className="modal-button-close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
//       &times;
//     </button>
// 	</div>
// )

// interface ModalBodyProps {
//   toggle: () => void;
//   children: any;
// }

// export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
// 	<div className="modal-body">
// 		{children}
// 	</div>
// )

// interface ModalFooteryProps {
//   toggle: () => void;
//   children: any;
// }
// export const ModalFooter: React.FC< ModalFooteryProps> = ({ children }) => (
// 	<div className="modal-footer">
// 		{children}
//   </div>
// )


// export default Modal;
