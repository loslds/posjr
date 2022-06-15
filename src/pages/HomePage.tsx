import { FormAcces } from '~/components/modal/form/acces/FormAcces';
import React, { useCallback, useState } from 'react';

import loginbrc1 from '../assets/images/loginbrc1.png';
import logomain from '../assets/images/logomain.png';
import logosys from '../assets/images/logosys.png';
import { Modal } from '../components/modal/Modal';
import {
  ContainerPage,
  ContainerPageFlexBetween,
  ContainerPageDoubleFlex,
  ContainerPageFlexLeft,
  ContainerPanelLogo,
  ContainerPageFlexWidth,
  ContainerPageMainFlex,
  ContainerPanelImgMaim,
  ButtonLogin,
  DivisionPanel
} from './styledPage';
export const HomePage: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleOpen = useCallback((open: boolean) => {
    return () => {
      setIsVisibleModal(!!open);
    };
  }, []);

  return (
    <ContainerPage>
      <ContainerPageFlexBetween>
        <ContainerPageDoubleFlex>
          <ContainerPageFlexLeft>
            <ContainerPanelLogo img={logosys} />
            <h2>JR Bordados.</h2>
          </ContainerPageFlexLeft>
          <ContainerPageFlexWidth>
            <ButtonLogin img={loginbrc1} onClick={handleOpen(true)} />
          </ContainerPageFlexWidth>
        </ContainerPageDoubleFlex>
        <DivisionPanel />
        <ContainerPageMainFlex>
          <ContainerPanelImgMaim img={logomain} title={'Logar...'} onClick={close} />
        </ContainerPageMainFlex>
        <Modal isOpen={isVisibleModal} onClose={handleOpen(false)} titulo={'Acesso Sistema'} form={<FormAcces />} />
      </ContainerPageFlexBetween>
    </ContainerPage>
  );
};
