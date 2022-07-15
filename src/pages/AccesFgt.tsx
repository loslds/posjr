import React from 'react';

import ButtonBg from '~/components/buttons/ButtonBg';
import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';

import mail from '../assets/images/svgs/mail.svg';
import * as C from './stylesAcces';

type PropsAccesFgt = {
  selected: boolean;
  onClick: () => void;
};

export const AccesFgt = ({ selected, onClick }: PropsAccesFgt) => {
  return (
    <Theme>
      <C.Container>
        <p>Você tem opções a escolher.</p>
        <Titles>
          <h1>Determie o que fazer ?</h1>
        </Titles>
        <p>Selecioneuma opção :</p>
        <hr />
        <label>Suas opções :</label>
        <p>Como deseja receber o acesso com segurança ?</p>
        <C.BoxLigth onClick={onClick} selected={selected}>
          <h3>Deseja receber acesso por Email ?</h3>
          <span>
            <ButtonBg title={'Enviar email...'} img={mail} onClick={() => {}} />
          </span>
        </C.BoxLigth>
      </C.Container>
    </Theme>
  );
};
