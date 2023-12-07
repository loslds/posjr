import React from 'react';

import { AccesUseForm } from '../../contexts/AccesContext';
import * as S from './styles';

type PropsSetor = {
  setor?: string;
  caminho?: string;
  children?: React.ReactNode | JSX.Element;
};
export const SectorsPg: React.FC<PropsSetor> = ({ setor, caminho }) => {
  const { state } = AccesUseForm();

  setor = state.setor;

  if (setor === 'Recepcao') {
    console.log('Recepção : ', setor);
    caminho = '/setores/sectorsPg';
  }
  if (setor === 'Producao') {
    console.log('Producao : ', setor);
  }
  if (setor === 'Acabamento') {
    console.log('Acabamento : ', setor);
  }
  if (setor === 'Expedicao') {
    console.log('Expedicao : ', setor);
  }
  if (setor === 'Contas') {
    console.log('Contas : ', setor);
  }
  if (setor === 'Financeiro') {
    console.log('Financeiro : ', setor);
  }

  return (
    <S.Container>
      <h1>SectorsPg {setor}</h1>
    </S.Container>
  );
};