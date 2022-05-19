// import Api from '../../requester'
import { compareValues } from 'mini-helper'

const data = {
  success: true,
  subcategories: [
    {
      id: 1,
      grupo: 1,
      subgrupo: 1,
      name: 'Todas as Artes.',
      onclick: () => {}
    },
    {
      id: 2,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes com Bordados.',
      onclick: () => {}
    },
    {
      id: 3,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes com Bordados em Tecidos.',
      onclick: () => {}
    },
    {
      id: 4,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes com Bordados em Bonés.',
      onclick: () => {}
    },
    {
      id: 5,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes com Bordados em Vestuários.',
      onclick: () => {}
    },
    {
      id: 6,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes com Bordados em Acessórios.',
      onclick: () => {}
    },
    {
      id: 7,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes com Bordados em outro Material.',
      onclick: () => {}
    },
    {
      id: 8,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers.',
      onclick: () => {}
    },
    {
      id: 9,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers em Acrílico.',
      onclick: () => {}
    },
    {
      id: 10,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers em M D F.',
      onclick: () => {}
    },
    {
      id: 11,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers em Madeiras.',
      onclick: () => {}
    },
    {
      id: 12,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers em Tecidos.',
      onclick: () => {}
    },
    {
      id: 13,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers em Couro, Courino ou Semelhante.',
      onclick: () => {}
    },
    {
      id: 14,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers em Metais.',
      onclick: () => {}
    },
    {
      id: 15,
      grupo: 1,
      subgrupo: 1,
      name: 'Artes a Lasers em outros Materiais.',
      onclick: () => {}
    },
    {
      id: 16,
      grupo: 2,
      subgrupo: 2,
      name: 'Todos os Bordados.',
      onclick: () => {}
    },
    {
      id: 17,
      grupo: 2,
      subgrupo: 2,
      name: 'Bordados em Tecidos.',
      onclick: () => {}
    },
    {
      id: 18,
      grupo: 2,
      subgrupo: 2,
      name: 'Bordados em Bonés.',
      onclick: () => {}
    },
    {
      id: 19,
      grupo: 2,
      subgrupo: 2,
      name: 'Bordados em Vestuários',
      onclick: () => {}
    },
    {
      id: 20,
      grupo: 2,
      subgrupo: 2,
      name: 'Bordados em Acessórios.',
      onclick: () => {}
    },
    {
      id: 21,
      grupo: 2,
      subgrupo: 2,
      name: 'Bordados em outro Material.',
      onclick: () => {}
    },
    {
      id: 22,
      grupo: 2,
      subgrupo: 2,
      name: 'Bordados como uso de Lasers.',
      onclick: () => {}
    },
    {
      id: 23,
      grupo: 3,
      subgrupo: 3,
      name: 'Todos com Laser.',
      onclick: () => {}
    },
    {
      id: 24,
      grupo: 3,
      subgrupo: 3,
      name: 'Laser em Acrílico.',
      onclick: () => {}
    },
    {
      id: 25,
      grupo: 3,
      subgrupo: 3,
      name: 'Laser em M D F.',
      onclick: () => {}
    },
    {
      id: 26,
      grupo: 3,
      subgrupo: 3,
      name: 'Laser em Madeiras.',
      onclick: () => {}
    },
    {
      id: 27,
      grupo: 3,
      subgrupo: 3,
      name: 'Laser em Tecidos.',
      onclick: () => {}
    },
    {
      id: 28,
      grupo: 3,
      subgrupo: 3,
      name: 'Laser em Couro, Courino ou Semelhante.',
      onclick: () => {}
    },
    {
      id: 29,
      grupo: 3,
      subgrupo: 3,
      name: 'Laser em Metais.',
      onclick: () => {}
    },
    {
      id: 30,
      grupo: 3,
      subgrupo: 3,
      name: 'Laser em outros Materiais.',
      onclick: () => {}
    }
  ]
}

export async function getSubCategory(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategories && order) {
    resultData.subcategories = resultData.subcategories.sort(
      compareValues(order, 'asc')
    )
    return resultData
  }
  return resultData
}
