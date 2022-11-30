import styled from 'styled-components';

import semimg from '~/assets/images/semimg.png';

export const DivForca = styled.div`
  border: 1px solid orange;
  padding: 2px 5px 2px 0px;
  margin: 2px 0px 2px 15px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
`;

export const DivForcaContainer = styled.div<{ open?: boolean }>`
  border: 1px solid red;
  padding: 2px 5px 2px 0px;
  margin: 2px 0px 2px 15px;
  width: 90%;
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
  font-size: 18px;
`;
/////////////////////////////////////
export const DivProgress = styled.div`
  border: 2px dashed white;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 20px;
  width: 40%;
  display: flex row;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: column;
  //align-items: flex-start;
  background-color: transparent; /*rgba(184, 184, 212, 0.2);*/
  font-size: 18px;
  color: white;
`;

export const DivItensProgress = styled.div`
  border: 2px solid #25cd89;
  border-radius: 10px; //////
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  width: 150px;
  display: flex row;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: column;
  align-items: center;
  //align-items: flex-start;
  background-color: transparent; /*rgba(184, 184, 212, 0.2);*/
  font-size: 14px;
  color: white;
`;
export const TitleItemProgress = styled.div<{ color: string }>`
  border: 2px solid #25cd89;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 0px;
  padding: 0px 0px 0px 0px;
  margin: -2px -2px -2px -2px;
  width: 150px;
  display: flex;
  flex-wrap: nowrap;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ color }) => color || 'transparent'};
  font-size: 14px;
  color: white;
`;

export const ContainerItensProgress = styled.div`
  border: 1px solid green;
  padding: 3px 0px 3px 3px;
  margin: 5px 5px 5px 5px;
  height: 145px;
  width: 100%;
  display: flex row;
  flex-wrap: wrap;
  justify-content: left;
  align-content: center;
  font-size: 18pt;
`;

export const DivSpace = styled.div`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 1px 1px 1px 1px;
  height: 1px;
  width: 98%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #495459;
  /* background-color: #7f7fbb; */
`;

export const Container = styled.div`
  border: 1px solid rgba(184, 184, 212, 1);
  // border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 20px;
  width: 250px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: column;
  align-items: flex-start;
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
  height: 35px;
  width: 35px;
  display: flex; /**block; */
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
