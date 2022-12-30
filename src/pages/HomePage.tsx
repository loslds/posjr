import React from 'react';
import { useNavigate } from 'react-router-dom';

import loginbrc1 from '~/assets/images/loginbrc1.png';
import logomain from '~/assets/images/logomain.png';
import logosys from '~/assets/images/logosys.png';
import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import {
  ButtonLogin,
  ContainerPage,
  ContainerPageDoubleFlex,
  ContainerPageFlexBetween,
  ContainerPageFlexLeft,
  ContainerPageFlexWidth,
  ContainerPageMainFlex,
  ContainerPanelTextFlex,
  ContainerPanelImgMaim,
  ContainerPanelLogo,
  DivisionPanel
} from './styledPage';

export const HomePage = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state, dispatch } = AccesUseForm();

  React.useEffect(() => {
    dispatch({
      type: AccesActions.setCurrentStep,
      payload: 0
    });
  }, [dispatch]);

  return (
    <div>
      <ContainerPage>
        <ContainerPageFlexBetween>
          <ContainerPageDoubleFlex>
            <ContainerPageFlexLeft>
              <ContainerPanelLogo img={logosys} />
              <h2>JR- Bordados.</h2>
            </ContainerPageFlexLeft>
            <ContainerPageFlexWidth>
              <ContainerPanelTextFlex>
                {state.logado ? (
                  <h3>{state.idname}</h3>
                ) : (
                  <p>Click para Logar...</p>
                )}
              </ContainerPanelTextFlex>
              <ButtonLogin
                img={loginbrc1}
                title={'Acesso...'}
                onClick={goto('/access')}

              />
            </ContainerPageFlexWidth>
          </ContainerPageDoubleFlex>
          <DivisionPanel />
          <ContainerPageMainFlex>
            <ContainerPanelImgMaim img={logomain} />
          </ContainerPageMainFlex>
        </ContainerPageFlexBetween>
      </ContainerPage>
    </div>
  );
};
