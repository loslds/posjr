import React, { ReactNode } from 'react';

import * as C from './styles';

type PropsTitle = {
  id?: string;
  children?: ReactNode;
};
export const Titles = ({ id, children }: PropsTitle) => {
  return <C.Container id={id}>{children}</C.Container>;
};
