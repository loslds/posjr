import React from 'react';
import { useNavigate } from 'react-router-dom';

import ImgClose from '../../assets/images/close.png';
import { ButtonModal } from './ButtonModal';
import { CardButtonsModal } from './CardButtonsModal';
import { CardModal } from './CardModal';
import { MainModal } from './MainModal';
import { TitleModal } from './TitleModal';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  id1?: string;
  id2?: string;
  root?: string;
  titulo?: string;
  tituloBtn?: string;
  children?: JSX.Element;
};

export const Modal: React.FC<Props> = ({
  isOpen,
  id1 = 'idmodal1',
  id2 = 'idmodal2',
  root = '',
  titulo = 'Titulo',
  tituloBtn = 'botão',
  onClose,
  children
}) => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  if (!isOpen) return null;

  return (
    <MainModal id={id1} isOpen={isOpen}>
      <CardModal id={id2}>
        <TitleModal titulo={titulo} />
        <CardButtonsModal>
          <ButtonModal img={ImgClose} onClick={onClose} />
        </CardButtonsModal>
      </CardModal>
      <h1>estou no modal</h1>
      {children}
      {goto(root)}
    </MainModal>
  );
};

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
