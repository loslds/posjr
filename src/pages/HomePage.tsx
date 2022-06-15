import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loginbrc from '../assets/images/loginbrc.png';
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

  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <ContainerPage>
      <ContainerPageFlexBetween>
        <ContainerPageDoubleFlex>
          <ContainerPageFlexLeft>
            <ContainerPanelLogo img={logosys} />
            <h2>JR Bordados.</h2>
          </ContainerPageFlexLeft>
          <ContainerPageFlexWidth>
            <ButtonLogin img={loginbrc} onClick={handleOpen(true)} />
          </ContainerPageFlexWidth>
        </ContainerPageDoubleFlex>
        <DivisionPanel />
        <ContainerPageMainFlex>
          <ContainerPanelImgMaim img={logomain} title={'Logar...'} onClick={close} />
        </ContainerPageMainFlex>
        <Modal isOpen={isVisibleModal} onClose={handleOpen(false)} root={'/modalpage'} titulo={'Acesso.Sistema'} />
      </ContainerPageFlexBetween>
    </ContainerPage>
  );
};
