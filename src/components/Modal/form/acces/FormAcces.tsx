import React from 'react';

import { CardFormAcces } from './CardFormAcces';
import { MainFormAcces } from './MainFormAcces';
import { TitleFormAcces } from './TitleFormAcces';
export const FormAcces: React.FC = () => {
  return (
    <MainFormAcces id={'login'}>
      <CardFormAcces>
        <TitleFormAcces titulo="Login-off" />
      </CardFormAcces>
    </MainFormAcces>
  );
};

/**====================================== */

// const ContainerCard = styled.div`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   min-height: 40px;
//   background-color: transparent;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;

// const ContainerModalTitle = styled.div`
//   border: 0px; /*1px green dashed;*/
//   padding: 0px auto;
//   margin: 0px auto;
//   min-width: 80%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   color: black;
//   font-size: 12px;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
//   h1,
//   h2,
//   h3 {
//     margin: 5px 5px 5px 5px;
//     padding: 5px 5px 5px 5px;
//     text-decoration-color: #727272;
//   }
//   h1 {
//     text-decoration: 3px underline;
//   }
//   h2 {
//     text-decoration: 2px underline;
//   }
//   h3 {
//     text-decoration: 1.5px underline;
//   }
// `;

// const ContainerAvatar = styled.div<{ img?: string }>`
//   border: 2px red solid;
//   height: 100px;
//   width: 120px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;

//    <ContainerCard>
//         <ContainerModalTitle>
//           <h2>LOGIN</h2>
//         </ContainerModalTitle>
//       </ContainerCard>
//       <ContainerAvatar>
//         <h2>Logon-off</h2>
//       </ContainerAvatar>
