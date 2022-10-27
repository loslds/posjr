import React from 'react';
import { MdSendToMobile, MdKeyboardAlt, MdMail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import * as C from './styles';

export const AccesCase = () => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
  return (
    <C.ContainerCase>
      {/* <h2>Opções:</h2> */}
      <C.ContainerArea>
        <label>Com Segurança:</label>
        <C.ButtonCase id={'pin'} onClick={goto('acceschvpin')}>
          Code PIN.
          <span>
            <MdKeyboardAlt />
          </span>
        </C.ButtonCase>
        <C.ButtonCase>
          Code SMS.
          <span>
            <MdSendToMobile />
          </span>
        </C.ButtonCase>
        <C.ButtonCase>
          Code E-MAIL.
          <span>
            <MdMail />
          </span>
        </C.ButtonCase>
      </C.ContainerArea>
    </C.ContainerCase>
  );
};
