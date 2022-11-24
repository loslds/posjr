import styled from 'styled-components';

import semimg from '~/assets/images/semimg.png';

export const DivForca = styled.div`
  border: 2px solid yellow;
  padding: 0px 0px 0px 0px;
  margin: 2px 10px 2px 10px;
  width: 98%;
  display: flex;
  flex-wrap: nowrap;
  flex-flow: column;
`;

export const DivProgress = styled.div`
  border: 2px dashed white;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 20px;
  min-width: 35%;
  display: flex row;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: column;
  //align-items: flex-start;
  background-color: transparent; /*rgba(184, 184, 212, 0.2);*/
  font-size: 14px;
  color: white;
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