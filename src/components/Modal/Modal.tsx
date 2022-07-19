import React from 'react';

import ImgClose from '~/assets/images/close.png';

import { ButtonModal } from './ButtonModal';
import { CardButtonsModal } from './CardButtonsModal';
import { CardModal } from './CardModal';
import { MainModal } from './MainModal';
import { TitleModal } from './TitleModal';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  titulo?: string;
  form?: React.ReactNode;
  children?: JSX.Element;
};

export const Modal: React.FC<Props> = ({
  isOpen,
  titulo = 'Titulo',
  onClose,
  form,
  children
}) => {
  if (!isOpen) return null;

  return (
    <MainModal id={'idmodal1'}>
      <CardModal id={'idmodal2'}>
        <TitleModal titulo={titulo} />
        <CardButtonsModal>
          <ButtonModal img={ImgClose} onClick={onClose} title={'Fechar...'} />
        </CardButtonsModal>
      </CardModal>
      {form}
      {children}
    </MainModal>
  );
};
