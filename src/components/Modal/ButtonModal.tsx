import React from 'react';
import styled from 'styled-components';

import semimg from '../../assets/images/semimg.png';

const ButtonModalImg = styled.button<{ img?: string }>`
  border: 0; /*1px black dashed;*/
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 35px;
  width: 35px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

type Props = {
  img?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ButtonModal: React.FC<Props> = ({ img, onClick, title }) => {
  return <ButtonModalImg img={img} onClick={onClick} title={title} />;
};
