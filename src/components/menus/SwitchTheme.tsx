import React from 'react';

import * as W from './styles';

export const SwitchTheme = () => {
  return (
    <W.MenuContainerPgSwitch>
      <Switch
        onChange={() => {
          ////
        }}
        chequed={false}
      />
    </W.MenuContainerPgSwitch>
  );
};
