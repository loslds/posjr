import styled from 'styled-components';

export const Container = styled.div`
  p {
    margin: 0px 0px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #b8b8d4;
    display: flex;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    color: #fff;
    font-style: normal;
  }
  h1 {
    font-size: 22px;
    line-height: 24px;
  }
  h2 {
    font-size: 20px;
    line-height: 22px;
  }
  h3 {
    font-size: 18px;
    line-height: 20px;
  }
  h4 {
    font-size: 14px;
    line-height: 16px;
  }
  h5 {
    font-size: 10px;
    line-height: 12px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 1px 0px 6px -3px;
    padding: 0px 0px 8px 0px;
  }
  label {
    margin: 0px 5px 0px 10px;
    padding: 0px 0px 0px 5px;
    font-size: 13px;
    color: #fff;
  }

  background-color: transparent;
  min-width: 245px;
  margin: 0px 0px 0px 5px;
  padding: 0px 0px 0px 0px;
  font-size: 13px;
  line-height: 20px;
  flex: content;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 0;
`;
