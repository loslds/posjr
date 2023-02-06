import React from 'react';

import * as S from './stylelayout';

type PropsLayoutPg = {
  children?: React.ReactNode | JSX.Element;
};
export const LayoutPg = ({ children }: PropsLayoutPg) => {
  return (
    <S.ContainerLayout>
      <S.ContainerPgFlexBetween>
        {children}
        <S.DivisionPgHztal />
      </S.ContainerPgFlexBetween>
    </S.ContainerLayout>
  );
};
// export default LayoutPg;
