import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import * as C from './styles';

type PropsButton = {
  title?: string;
  children?: React.ReactNode;
};
export const ModalTargeta: React.FC<PropsButton> = () => {
  return (
    <C.DivButtonClose>
      <C.ModalDivRightsImg>
        <span>
          <FaRegTimesCircle
            color={'#ff0505'}
            onClick={() => {}}
            cursor={'pointer'}
            title={'Fechar...'}
          />
        </span>
      </C.ModalDivRightsImg>
    </C.DivButtonClose>
  );
};
