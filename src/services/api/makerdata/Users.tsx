import React from 'react';

export const data = {
  succes: true,
  usuarios: [
    {
      id: 1,
      nameid: 'Oswaldo',
      name: 'Lindsay O. Sbrissa',
      cpf: '83185133849',
      cnpj: '',
      pin: '1234',
      mail: 'loslds7@hormail.com',
      fone: '85997851139',
      local: 'Av. Sargemto Herminio Sampaio',
      nrlocal: '1415',
      cep: '60320-105',
      bairro: 'São Gerardo',
      cidade: 'Fortaleza',
      uf: 'Ceará',
      idsector: 9,
      namesetor: 'Todos',
      level: 1,
      descrlevel: 'internet'
    },
    {
      id: 2,
      nameid: 'Junior',
      name: 'Junior Bordados Ltda.',
      cpf: '',
      cnpj: '010157662000123',
      pin: '5678',
      mail: 'jrbordados@hotmail.com.br',
      fone: '8532431872',
      local: 'Rua Prof. Anacleto',
      nrlocal: '576',
      cep: '60450360',
      bairro: 'Parquelândia',
      cidade: 'Fortaleza',
      uf: 'Ceará',
      idsector: 1,
      namesetor: 'Recepçao',
      level: 2,
      descrlevel: 'intranet'
    }
  ]
};

export async function getUsers(options = {}) {
  type propsf = {
    order?: object;
    filter?: object;
  };
  const { order, filter = {} } = options;
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data });
    }, 2000);
  });

  const resultData = result && result.data;

  const { categoryId, subcategoryId, promocao } = filter;

  if (promocao) {
    resultData.products = resultData.products.filter(
      p => p.promocao === promocao
    );
  }

  if (categoryId) {
    resultData.products = resultData.products.filter(
      p => p.grupo === categoryId
    );
  }
  if (subcategoryId) {
    resultData.products = resultData.products.filter(
      p => p.subgrupo === subcategoryId
    );
  }

  if (resultData.products && order) {
    resultData.products = resultData.products.sort(compareValues(order, 'asc'));
  }
  return resultData;
}
