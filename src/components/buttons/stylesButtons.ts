import styled from 'styled-components';

import semimg from '~/assets/images/semimg.png';

export const ContainerButtonImgBg = styled.div<{ ondisplay?: boolean }>`
  border: 0;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: 45px;
  width: 68px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: black;
`;

export const ButtonsImgBg = styled.button<{ img?: string }>`
  border: 0;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 45px;
  height: 45px;
  display: flex;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  font-size: 16px;
`;

export const ContainerButtonCircleImgBg = styled.div`
  border: 0;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 45px;
  width: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: black;
`;
export const ButtonsCirclesBg = styled.button<{ img?: string }>`
  border: 50%;
  margin: 0px 0px 0px -10px;
  padding: 0px 0px 0px -10px;
  color: white;
  font-size: 12px; /**16px; */
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover; /**contain; */
  background-position: center;
  background-attachment: fixed;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 30px;
  display: block; /**flex; */
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ButtonClickPresImg = styled.button<{ img?: string }>`
  border: 0; /*1px black dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ img }) => img || semimg});
  background-position: center;
  //background-attachment: fixed;
  cursor: pointer;
  outline: none;
  min-height: 37px;
  width: 35px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

// type Props = {
//   open?: boolean;
//   img?: string;
//   title?: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// };
// export const ContainerButtonsImg = styled.div<Props>`
//   border: 2px solid ${props => (props.open ? '#25cd89' : '#16195c')};
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: flex;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: 35px;
//   background-position: center;
//   background-attachment: fixed;
//   cursor: pointer;
//   outline: none;
//   font-size: 16px;
//   &:hover {
//     border: 2px solid #ddffaa;
//   }
// `;

// export const ContentButtonPageBg = styled.div`
//   border: 1px red solid;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 100px;
//   width: 100px;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: white;
//   font-size: 14px;
// `;
// export const ContentButtonPageCenterBg = styled.div`
//   border: 1px rebeccapurple solid;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 50px;
//   width: 50px;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: white;
//   font-size: 14px;
// `;
// export const ContentButtonPageEndBg = styled.div`
//   border: 1px green solid;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 50px;
//   width: 50px;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
//   color: white;
//   font-size: 14px;
// `;
// export const ContentButtonCtrlPage = styled.div`
//   border: 2px #f80606 dotted;
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   width: 100%;
//   max-height: 100%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
// `;

// export const CtrlPageCol = styled.div`
//   border: 0px;
//   border-radius: 10px;
//   padding: 2px auto;
//   margin: 2px auto;
//   min-width: 100%;
//   display: flex;
//   background-color: transparent; /*rgba(0, 0, 0, 1);*/
// `
// export const CtrlPage = styled.div`
//   min-height: 40px;
//   width: 100%;
//   padding: 2px 5px 2px 5px;
//   margin: 0px 0px 0px 0px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-around;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
//   div {
//     padding: 0px 5px 0px 5px;
//     margin: 0px 0px 0px 0px;
//   }
// `
// /**    button icon geral */
// export const ContainerButtonImgBg1 = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 40px;
//   width: 40px;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonsImgBg = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 35px;
//   height: 35px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// /**    button icon design */
// export const ContButtonImgBgDesig = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 40px;
//   width: 40px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonImgBgDesig = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 35px;
//   height: 35px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// export const ContButtonImgBgDesigProd = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 40px;
//   width: 40px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonImgBgDesigProd = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 35px;
//   height: 35px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// /**    button icon produto */
// export const ContButtonImgBgProd = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 40px;
//   width: 40px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonImgBgProd = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 35px;
//   height: 35px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// /** button Bordados  */
// export const ContButtonImgBgBordadosProd = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 40px;
//   width: 40px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonImgBgBordadosProd = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 35px;
//   height: 35px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// /** button Laser  */
// export const ContButtonImgBgLaserProd = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 40px;
//   width: 40px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonImgBgLaserProd = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 35px;
//   height: 35px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// /**    button icon serviço */
// export const ContButtonImgBgServ = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 40px;
//   width: 40px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonImgBgServ = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 35px;
//   height: 35px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// /**    button logo page */
// export const ContainerButtonPage = styled.div`
//   border: 0px;
//   padding: 2px auto;
//   margin: 2px auto;
//   min-width: 100%;
//   background-color: transparent;
//   display: flex;
//   justify-content: center;
//   align-content: center;
// `
// export const ContainerButtonLogoPage = styled.div`
//   border: 0.3px #82b6f1 solid;
//   border-radius: 10px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 70px;
//   width: 210px;
//   background-color: #c0d1f396;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
//   align-content: center;
//   align-content: center;
//   color: black;
//   min-height: 35px;
//   font-size: 14px;
// `
// export const ButtonsImgLogoPage = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 200px;
//   height: 67px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
// `
// /**    button card image logo */
// export const ContainerButtonImgBgLogo = styled.div`
//   border: 0px;
//   padding: 1px 1px 1px 1px;
//   margin: 1px 4px 1px 4px;
//   height: 45px;
//   width: 130x;
//   background-color: transparent;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   color: black;
//   min-height: 45px;
//   font-size: 14px;
// `
// export const ButtonsImgBgLogo = styled.button`
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   display: block;
//   width: 100px;
//   height: 350px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: normal;
//   outline: none;
//   font-size: 14px;
// `
// export const ButtonToolsBar = styled.button`
//   border: 1px #faf000 solid;
//   padding: 0px 0px 0px 0px;
//   margin: 5px 5px 5px 5px;
//   display: block;
//   width: 40px;
//   height: 40px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
// `
