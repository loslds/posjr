import React from 'react';

import * as S from './styles';
//import { defaulDarkTheme, defaulLightTheme } from './themesetores';
//  , greenDarkTheme, greenLightTheme, brownDarkTheme , brownLightTheme, yellowDarkTheme, yellowLightTheme, cianoDarkTheme, cianoLightTheme, blueDarkTheme, blueLightTheme, violetDarkTheme, violetLightTheme, roxioletDarkTheme, roxioLightTheme, cakiDarkTheme, cakiLightTheme, DarkTheme, LightTheme } from '/.';
// import './sector.css';

// export function verificaPage(
//   text: string,
//   oldData: SetoresSummary
//   ): SetoresSummary {
//     const page = text;
//     if (page === '') {

//     }
//     if (page === 'Recepcao') {
//       const arrSetor: Array<[number, CharType]> = [
//         [text.match(page)?.length || 0, 'Recepcao']

//     }
//     if (page === 'Producao') {
//     }

//     const arrSetor: Array<[number, CharType]> = [
//       [text.match(page)?.length || 0, 'Recepcao'],
//       [text.match(page)?.length || 0, 'Design'],
//       [text.match(page)?.length || 0, 'Producao'],
//       [text.match(page)?.length || 0, 'Acabamento'],
//       [text.match(page)?.length || 0, 'Expedicao'],
//       [text.match(page)?.length || 0, 'Contas'],
//       [text.match(page)?.length || 0, 'Financeiro'],
//       [text.match(page)?.length || 0, 'Todos']
//     ];

//     const result = Object.entries(oldData).reduce(
//       (acc, [key, value]) => {
//         const k = key as CharType;
//         const matchFound = arrSetor.find(f => f.includes(k))?.[0] || 0;
//         acc[k].ispage = matchFound ? true : false;

//         return acc;
//       },
//       { ...oldData } as SetoresSummary }
//     return result;
// );

type PropsSetor = {
  setor?: string;
};
export const SectorsPg: React.FC<PropsSetor> = ({ setor }) => {
  if (setor === 'Recepcao') {
  }
  if (setor === 'Producao') {
  }
  if (setor === 'Acabamento') {
  }
  if (setor === 'Expedicao') {
  }
  if (setor === 'Contas') {
  }
  if (setor === 'Financeiro') {
  }

  return (
    <S.Container>
      <h1>SectorsPg</h1>
    </S.Container>
  );
};
