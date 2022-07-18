import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonBg from '~/components/buttons/ButtonBg';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import fone from '../assets/images/svgs/fone.svg';
import mail from '../assets/images/svgs/mail.svg';
import * as C from './stylesAcces';

type PropsAccesFgt = {
  selected: boolean;
  open?: bollean;
  onClick: () => void;
};

export const AccesFgt = ({ selected, onClick, open }: PropsAccesFgt) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handlerIsClick = useCallback(() => {
    setOpen(old => !old);
    open = { isOpen };
  }, []);

  const handlerIsOpen = useCallback(() => {
    setIsOpen(oldState => !oldState);
  }, []);

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const setClick = (option: number, pth: string) => {
    const vl = option;
    if (vl >= 1) {
      handlerIsOpen();
      return goto(pth);
    }
    return goto('/accesfgt');
  };

  return (
    <Theme>
      <C.Container onClick={handlerIsClick}>
        <p>Você tem opções a escolher.</p>
        <Titles>
          <h1>Determie o que fazer ?</h1>
        </Titles>
        <p>Selecioneuma opção :</p>
        <hr />
        <label>Suas opções :</label>
        <p>Como deseja receber o acesso com segurança ?</p>
        <C.BoxButton selected={selected}>
          <h3>Deseja receber acesso Email ?</h3>
          <span>
            <ButtonBg
              title={'Enviar chave p/ email...'}
              img={mail}
              onClick={() => setClick(1, '/accesmail')}
              open={isOpen}
            />
          </span>
          <C.DivPosImg open={isOpen}>
            <h5>aaaaaaaa</h5>
          </C.DivPosImg>
        </C.BoxButton>
        <C.BoxButton selected={selected}>
          <h3>Deseja receber acesso Celular ?</h3>
          <span>
            <ButtonBg
              title={'Enviar chave p/ celular...'}
              img={fone}
              onClick={() => setClick(2, '/accesmail')}
            />
          </span>
          <C.DivPosImg open={isOpen}>
            <h5>85997851139</h5>
          </C.DivPosImg>
        </C.BoxButton>
      </C.Container>
    </Theme>
  );
};
