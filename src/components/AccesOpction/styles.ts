import styled from 'styled-components';

import closeverm from '~/assets/images/closeverm.png';

export const Container = styled.div<{ selected: boolean }>`
  background-color: transparent;
  border: 2px solid ${props => (props.selected ? '#25cd89' : '#16195c')};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: #fff;
  //padding: 10px 5px 5px 5px;
  //margin: 10px 5px 5px 5px;
  //border-bottom: 1px #16195c solid;
  cursor: pointer;
  &:hover {
    border: 2px #495459 solid;
  }
`;

export const Icon = styled.div<{ img?: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #191459;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 30px;
    display: block;
    background-image: url(${({ img }) => img || closeverm});
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #b8b8d4;
`;
