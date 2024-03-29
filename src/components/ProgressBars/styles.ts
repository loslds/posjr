import styled from 'styled-components';

export const ConteudoBarMain = styled.div<{ open?: boolean }>`
  border: 0px; /** 1px dashed yellow; */
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 98%;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 16px;
`;

type PropsCol = {
  width?: string;
};
export const ContainerBarFlexCol = styled.div<PropsCol>`
  border: 0px; /**1px yellow solid; */
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  width: ${props => props.width};
  display: flex;
  flex-wrap: wrap;
  justify-content: column;
  align-content: center;
  align-items: center;
  background-color: transparent;
`;

type PropsCc38 = {
  color?: string;
  width?: string;
};
export const Container38 = styled.div<PropsCc38>`
  border: 1px dashed black;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  width: 38%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: left;
  background-color: rgba(184, 184, 212, 0.2);
  font-size: 20px;
  color: white;
  label {
    padding: 0px 5px 0px 5px;
    margin: 0px 10px 0px 10px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  progress {
    margin-left: 15px;
    margin-right: 10px;
  }
`;

type PropsCc100 = {
  color?: string;
  width?: string;
};
export const Container100 = styled.div<PropsCc100>`
  border: 1px dashed black;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: center;
  background-color: transparent; /*rgba(184, 184, 212, 0.2);*/
  font-size: 18px;
  color: white;
  label {
    padding: 0px 5px 0px 5px;
    margin: 0px 10px 0px 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  progress {
    margin-left: 15px;
    margin-right: 10px;
  }
  progress[value] {
    width: ${props => props.width};
    -ms-progress-appearance: none;
    appearance: none;
  }
  progress[value] ::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }

  progress[value] ::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

/////////////////////////////////////////////
export const ContainerDivProgres = styled.div<{ open?: boolean }>`
  border: 0px; /** 1px dashed green; */
  padding: 2px 0px 2px 0px;
  margin: 2px 2px 2px 15px;
  height: 20px;
  max-width: 100%;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 18px;
  color: white;
  span {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 2px 5px;
  }
`;

export const ButtonDivPresImg = styled.button<{ img?: string }>`
  border: 0; /*1px black dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ img }) => img || null});
  background-position: center;
  //background-attachment: fixed;
  cursor: pointer;
  outline: none;
  min-height: 20px;
  width: 100%;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerDivProgresMain = styled.div`
  border: 1px solid white;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 200px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: center;
  align-items: center;
  background-color: transparent;
`;

type PropsDivF = {
  bgcor?: string;
};
export const DivProgresFlex = styled.div<PropsDivF>`
  border: 0;
  height: 20px;
  width: 50px;
  display: flex;
  background-color: ${props => props.bgcor};
  font-size: 14px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  span {
    margin: 0px 0px 0px 8px;
  }
`;

type PropsDivI = {
  open?: boolean;
  isinfo?: boolean;
  bgcor?: string;
};
export const DivContainerInfo = styled.div<PropsDivI>`
  border: 0;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 10px;
  height: 20px;
  width: 50px;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: nowrap;
  justify-content: left;
  align-content: center;
  align-items: center;
  background-color: ${props => props.bgcor};
  font-size: 14px;
  font-weight: bold;
  span {
    margin: 5px 5px 5px 5px;
  }
`;
