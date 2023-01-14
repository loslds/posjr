import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import * as C from './styles';

export const ModalButtonProgress: React.FC = () => {
  return (
    <C.DivButtonClose>
      <C.ModalDivRightsImg>
        <span>
          <FaRegTimesCircle
            color={'#0d7060'}
            onClick={() => {}}
            cursor={'pointer'}
            title={'Fechar...'}
          />
        </span>
      </C.ModalDivRightsImg>
    </C.DivButtonClose>
  );
};
