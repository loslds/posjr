import React, { useState } from 'react';

import { useLocalStorage } from '~/hooks/useLocalStorage';

import { InputSenha, InputSenhaProps } from './InputSenha';

type CharType = 'Numeral' | 'Cxbaixa' | 'Cxalta' | 'Simbolo';

type Summary = {
  quantity: number;
  value: number;
  result: number;
  percent: number;
};

type PasswordSummary = Record<CharType, Summary>;

const initialState: PasswordSummary = {
  Cxalta: { percent: 0, quantity: 0, result: 0, value: 11 },
  Cxbaixa: { percent: 0, quantity: 0, result: 0, value: 7 },
  Numeral: { percent: 0, quantity: 0, result: 0, value: 1 },
  Simbolo: { percent: 0, quantity: 0, result: 0, value: 55 }
};

function calculateValues(text: string, oldData: PasswordSummary): PasswordSummary {
  const rex = /[\!\#\$\&\+\-\.\<\=\>\@\^\_]/g;
  const arrCalc: Array<[number, CharType]> = [
    [text.match(/[A-Z]/g)?.length || 0, 'Cxalta'],
    [text.match(/[a-z]/g)?.length || 0, 'Cxbaixa'],
    [text.match(/[0-9]/g)?.length || 0, 'Numeral'],
    [text.match(rex)?.length || 0, 'Simbolo']
  ];

  const result = Object.entries(oldData).reduce(
    (acc, [key, value]) => {
      const k = key as CharType;
      const matchFound = arrCalc.find(f => f.includes(k))?.[0] || 0;
      acc[k].quantity = matchFound;
      acc[k].result = matchFound ? matchFound * value.value : 0;
      acc[k].percent = matchFound ? (matchFound * 100) / 10 : 0;

      return acc;
    },
    { ...oldData } as PasswordSummary
  );

  return result;
}

type Salved = {
  text: string;
};
export const TestSenha: React.FC = () => {
  const [passwordSummary, setPasswordSummary] = useState<PasswordSummary>(initialState);
  const [value, setValue] = useLocalStorage<Salved>('text');

  const handleChangeText: InputSenhaProps['onChange'] = text => {
    const newData = calculateValues(text, { ...passwordSummary });
    setPasswordSummary(newData);
    setValue({ text });
  };

  return (
    <div>
      <div>
        Ultimo texto digitado: <strong>{value?.text || ''}</strong>
      </div>
      <div>
        <InputSenha onChange={handleChangeText} />
        {Object.entries(passwordSummary).map(([k, v]) => {
          return (
            <div key={`item-${k}`}>
              <span>{k}</span>
              <code>{JSON.stringify(v)}</code>
            </div>
          );
        })}
      </div>
    </div>
  );
};
