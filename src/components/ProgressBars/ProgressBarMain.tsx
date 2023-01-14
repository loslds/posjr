import React from 'react';

import * as C from './styles';

type PropsBarMain = {
  children?: React.ReactNode;
  open?: boolean;
};
export const ProgressBarMain: React.FC<PropsBarMain> = ({ children, open }) => {
  return <C.ConteudoBarMain open={open}>{children}</C.ConteudoBarMain>;
};
