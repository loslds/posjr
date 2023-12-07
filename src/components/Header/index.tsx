import React from 'react';

import * as C from './styles';

type PropsHeader = {
  children?: React.ReactNode | JSX.Element;
};
const Header: React.FC<PropsHeader> = ({ children }) => {
  return <C.ContainerHeard>{children}</C.ContainerHeard>;
};
export default Header;
