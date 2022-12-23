import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import * as C from './styles';
type PropsTargeta = {
  titulo?: string;
  children?: React.ReactNode;
};
export const ModalTargeta: React.FC<PropsTargeta> = ({ titulo }) => {
  return (
    <C.ContainerTitleButton>
      <h3>{titulo}</h3>
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
    </C.ContainerTitleButton>
  );
};
