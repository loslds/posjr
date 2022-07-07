import React, { ReactNode } from 'react';

import * as C from './styles';

type PropsTitle = {
  children?: ReactNode;
};
export const Titles = ({ children }: PropsTitle) => {
  return <C.Container>{children}</C.Container>;
};
