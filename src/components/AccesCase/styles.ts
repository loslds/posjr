import styled from 'styled-components';

export const ContainerCase = styled.div`
  /* border: 1px solid #fff;
  border-radius: 5px;
   */
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 5px 18px;
  width: 87%;
  min-height: 50px;
  background-color: Transparent;
  h2 {
    margin: 5px 0px 5px 2px;
    padding: 0px 0px 0px 2px;
    font-size: 20px;
    line-height: 22px;
  }
`;

export const ContainerArea = styled.div`
  /* border: 1px solid violet; */
  border: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 99%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-flow: column;
  align-content: center;
  align-items: stretch;
  font-style: normal;
  font-size: 13px;
  line-height: 15px;
`;

export const ButtonCase = styled.button`
  padding: 5px 5px 5px 5px;
  margin: 3px 3px 3px 15px;
  border: 1px solid #ddffaa;
  border-radius: 5px;
  width: 90%;
  color: #000;
  /* font-size: 12px;
  line-height: 14px; */
  font-weight: bold;
  cursor: pointer;

  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  align-content: center;
  background-color: #25cd89;

  &:hover {
    background-color: #7df0c1;
  }
  span {
    margin: 0px 15px 0px 15px;
    display: inline-flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
  }
`;

// export const ContainerTitle = styled.div`
//   border: 1px dashed yellow;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   background-color: Transparent;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;
//
// export const ContainerArea = styled.div`
//   border: 1px dashed red;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 10px 0px 10px;
//   width: 87%;
//   min-height: 48px;
//   background-color: Transparent;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-content: center;
//   min-height: 50px;
// `;

// export const ContainerEnd = styled.div`
//   border: 1px solid violet;
//   padding: 0px 0px 0px 0px;
//   margin: 2px 0px 2px 10px;
//   min-height: 45px;
//   background-color: transparent;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-end;
//   align-items: center;
//   align-content: center;
// `;

// export const SidebarContainer = styled.div`
//   border: 1px solid #fff;
//   border-radius: 5px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 10px 5px 18px;
//   width: 87%;
//   min-height: 50px;
//   background-color: Transparent;
//   display: flex;
//   flex-direction: column;
//   color: #fff;
// `;
