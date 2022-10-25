import React from 'react';
import { MdSendToMobile, MdKeyboardAlt, MdMail } from 'react-icons/md';

//FaMobileAlt
import * as C from './styles';

export const AccesCase = () => {
  return (
    <C.ContainerCase>
      {/* <h2>Opções:</h2> */}
      <C.ContainerArea>
        <label>Através de:</label>
        <C.ButtonCase>
          Chave PIN.
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
