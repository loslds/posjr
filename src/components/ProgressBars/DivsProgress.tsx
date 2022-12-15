import React from 'react';

import * as C from './styles';

type PropsDivProgress = {
  bgcor?: string;
  width?: string;
  perc?: number;
  isperc: boolean;
};
export const DivsProgress: React.FC<PropsDivProgress> = ({
  bgcor,
  width,
  perc,
  isperc
}) => {
  return (
    <C.ContainerDivProgres>
      <C.ContainerDivProgresMain>
        <C.DivProgresFlex0 bgcor={bgcor} width={width}>
          {isperc ? <span>{perc}%</span> : null}
        </C.DivProgresFlex0>
      </C.ContainerDivProgresMain>
    </C.ContainerDivProgres>
  );
};
