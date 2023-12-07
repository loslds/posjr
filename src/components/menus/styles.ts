import styled from 'styled-components';

import semimg from '~/assets/images/svgs/semimg.png';

export const MenuContainerPg = styled.div`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  background-color: transparent;
  color: #000;
  width: 100%;
  // display: flex;
`;
export const MenuContainerPgFlexLeft = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 0px;
  max-width: Calc(40% / 2)-10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
`;
export const MenuContainerPgLogo = styled.div<{ img?: string }>`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 10px;
  min-height: 50px;
  width: 130px;
  display: flex;
  background-color: whitesmoke;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const MenuContainerPgFlexWidth = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 0px;
  width: Calc(45% / 2)-10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  label {
    padding: 0px 5px 0px 5px;
    margin: 0px 10px 0px 10px;
    font-size: 14pt;
    font-style: normal;
    //font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif';
  }
`;

export const MenuContainerPgSwitch = styled.div`
  border: 2px red solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 0px;
  width: 150px;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  label {
    padding: 0px 5px 0px 5px;
    margin: 0px 10px 0px 10px;
    font-size: 14pt;
    font-style: normal;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif';
  }
`;
