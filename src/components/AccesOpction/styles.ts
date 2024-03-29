import styled from 'styled-components';

// import xverm from '~/assets/images/xverm.png';

export const Container = styled.div<{ selected: boolean }>`
  background-color: transparent;
  border: 2px solid ${props => (props.selected ? '#25cd89' : '#16195c')};
  border-radius: 10px;
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 15px;
  display: flex;
  align-items: center;
  align-content: center;
  color: #fff;
  cursor: pointer;
  &:hover {
    // border: 2px #495459 solid;
    border: 2px solid #ddffaa;
  }
`;

export const Icon = styled.div<{ img?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191459;
  font-size: 30px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #b8b8d4;
`;
