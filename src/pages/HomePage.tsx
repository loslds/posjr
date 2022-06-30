import React from 'react';
import { useNavigate } from 'react-router-dom';

import loginbrc1 from '~/assets/images/loginbrc1.png';
import logomain from '~/assets/images/logomain.png';
import logosys from '~/assets/images/logosys.png';

import {
  ContainerPageFlexBetween,
  ContainerPageDoubleFlex,
  ContainerPageFlexLeft,
  ContainerPanelLogo,
  ContainerPageFlexWidth,
  ContainerPageMainFlex,
  ContainerPanelImgMaim,
  ButtonLogin,
  DivisionPanel,
  ContainerPage
} from './styledPage';

export const HomePage: React.FC = () => {
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
            <ButtonLogin img={loginbrc1} title={'Acesso...'} onClick={goto('/accespage')} />
          </ContainerPageFlexWidth>
        </ContainerPageDoubleFlex>
        <DivisionPanel />
        <ContainerPageMainFlex>
          <ContainerPanelImgMaim img={logomain} />
        </ContainerPageMainFlex>
      </ContainerPageFlexBetween>
    </ContainerPage>
  );
};
