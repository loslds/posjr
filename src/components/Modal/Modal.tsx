import React from 'react';

import ImgClose from '~/assets/images/close.png';

import { ButtonModal } from './ButtonModal';
import { CardButtonsModal } from './CardButtonsModal';
import { CardModal } from './CardModal';
import { MainModal } from './MainModal';
import { TitleModal } from './TitleModal';

type Props = {
  isOpen?: boolean;
  istitle?: boolean;
  isbtof?: boolean;
  onClick?: React.ReactNode;
  onCloseModal?: React.ReactNode;
  titulo?: string;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({
  isOpen,
  istitle,
  titulo,
  isbtof,
  children
}) => {
  if (!isOpen) return null;

  // const handleClose = React.useCallback(e => {
  //   e.stopPropagation();
  //   onClose();
  // }, []);

  return (
    // <MainModal id={'idmodal1'} onClick={handleClose}>
    <MainModal id={'idmodal1'}>
      <CardModal>
        {istitle ? <TitleModal titulo={titulo} /> : null}
        <CardButtonsModal isbtof={isbtof}>
          <ButtonModal
            img={ImgClose}
            // onClick={handleClose}
            title={'Fechar...'}
          />
        </CardButtonsModal>
      </CardModal>
      {children}
    </MainModal>
  );
};
