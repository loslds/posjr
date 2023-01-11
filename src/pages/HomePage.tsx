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
    dispatch({
      type: AccesActions.setLevel,
      payload: 0
    });
    dispatch({
      type: AccesActions.setDescrlevel,
      payload: ''
    });
    dispatch({
      type: AccesActions.setLevelCase,
      payload: 0
    });
    dispatch({
      type: AccesActions.setDescrCase,
      payload: ''
    });
    dispatch({
      type: AccesActions.setDescrCasePath,
      payload: ''
    });
    dispatch({
      type: AccesActions.setIdname,
      payload: ''
    });
    dispatch({
      type: AccesActions.setPassword,
      payload: ''
    });
    dispatch({
      type: AccesActions.setLogado,
      payload: false
    });
    dispatch({
      type: AccesActions.setPage,
      payload: 'HomePage'
    });
    dispatch({
      type: AccesActions.setModulo,
      payload: ''
    });
    dispatch({
      type: AccesActions.setName,
      payload: ''
    });
    dispatch({
      type: AccesActions.setEmail,
      payload: ''
    });
    dispatch({
      type: AccesActions.setFone,
      payload: ''
    });
    dispatch({
      type: AccesActions.setDescrpath,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvPin,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvSms,
      payload: ''
    });
    dispatch({
      type: AccesActions.setChvMail,
      payload: ''
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
              {!state.logado ? (
                <ButtonLogin
                  img={loginbrc1}
                  title={'LogoON...'}
                  onClick={goto('/access')}
                />
              ) : null}
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
