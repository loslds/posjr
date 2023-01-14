import styled from 'styled-components';

type PropsCc = {
  color?: string;
  width?: string;
};
export const Container = styled.div<PropsCc>`
  border: 2px dashed black;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  max-width: 100%;
  display: flex row;
  flex-wrap: nowrap;
  justify-content: column;
  align-content: left;
  background-color: transparent; /*rgba(184, 184, 212, 0.2);*/
  font-size: 18px;
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
    margin-right: 20px;
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
