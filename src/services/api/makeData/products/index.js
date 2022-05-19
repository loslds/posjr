import { compareValues } from 'mini-helper'

const data = {
  succes: true,
  portifolios: [
    /** registros  Categorias  1 - Artes */
    {
      id: 1,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 1,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.001.000.000',
      ref: 'Todas as Artes',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 2,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 2,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.002.000.000',
      ref: 'Artes com Bordados.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 3,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 3,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.003.000.000',
      ref: 'Artes com Bordados em Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 4,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 4,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.004.000.000',
      ref: 'Artes com Bordados em Bonés.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 5,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 5,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.005.000.000',
      ref: 'Artes com Bordados em Vestuários.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 6,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 6,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.006.000.000',
      ref: 'Artes com Bordados em Acessórios.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 7,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 7,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.007.000.000',
      ref: ' Artes com Bordados em outro Material.',
      imageUrl: '',
      onclick: () => {}
    },

    {
      id: 8,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 8,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.008.000.000',
      ref: 'Artes a Lasers.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 9,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 9,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.009.000.000',
      ref: 'Artes a Lasers com Acrílico.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 10,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 10,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.010.000.000',
      ref: 'Artes a Lasers com M D F.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 11,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 11,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.011.000.000',
      ref: 'Artes a Lasers com Madeiras.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 12,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 12,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.012.000.000',
      ref: 'Artes a Lasers com Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 13,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 13,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.013.000.000',
      ref: 'Artes a Lasers com Couro, Courino ou Semelhante.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 14,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 14,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.014.000.000',
      ref: 'Artes a Lasers com Metais.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 15,
      grupo: 1,
      subgrupo: 1,
      subcategoryartes: 15,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001.001.015.000.000',
      ref: 'Artes a Lasers com outros Materiais.',
      imageUrl: '',
      onclick: () => {}
    },
    /** registros  Categorias  2 - Bordados */
    {
      id: 16,
      grupo: 2,
      subgrupo: 2,
      subcategoryartes: 0,
      subcategorybordados: 1,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002.002.000.001.000',
      ref: 'Todas os Bordados',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 17,
      grupo: 2,
      subgrupo: 2,
      subcategoryartes: 0,
      subcategorybordados: 2,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002.002.000.002.000',
      ref: 'Bordados em Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 18,
      grupo: 2,
      subgrupo: 2,
      subcategoryartes: 0,
      subcategorybordados: 3,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002.002.000.003.000',
      ref: 'Bordados em Bonés.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 19,
      grupo: 2,
      subgrupo: 2,
      subcategoryartes: 0,
      subcategorybordados: 4,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002.002.000.004.000',
      ref: 'Bordados em Vestuários.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 20,
      grupo: 2,
      subgrupo: 2,
      subcategoryartes: 0,
      subcategorybordados: 5,
      subcategorylasers: 0,
      codref: '002.002.000.005.000',
      ref: 'Bordados em Acessórios.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 21,
      grupo: 2,
      subgrupo: 2,
      subcategoryartes: 0,
      subcategorybordados: 6,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002.002.000.006.000',
      ref: 'Bordados em outro Material.',
      imageUrl: '',
      onclick: () => {}
    },
    /** registros  Categorias  3 - Laser */
    {
      id: 22,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 1,
      name: 's/ nome',
      codref: '003.003.000.000.001',
      ref: 'Todos com Laser.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 23,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 2,
      name: 's/ nome',
      codref: '003.003.000.000.002',
      ref: 'Laser em Acrílico.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 24,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 3,
      name: 's/ nome',
      codref: '003.003.000.000.003',
      ref: 'Laser em M D F.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 25,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 4,
      name: 's/ nome',
      codref: '003.003.000.000.004',
      ref: 'Laser em Madeiras.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 26,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 5,
      name: 's/ nome',
      codref: '003.003.000.000.005',
      ref: 'Laser em Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 27,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 6,
      name: 's/ nome',
      codref: '003.003.000.000.006',
      ref: 'Laser em Couro, Courino ou Semelhante.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 28,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 7,
      name: 's/ nome',
      codref: '003.003.000.000.007',
      ref: 'Laser em Metais.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 29,
      grupo: 3,
      subgrupo: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 8,
      name: 's/ nome',
      codref: '003.003.000.000.008',
      ref: 'Laser em outros Materiais.',
      imageUrl: '',
      onclick: () => {}
    }
  ]
}

export async function getProducts(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order, filter = {} } = options
  const resultData = result && result.data

  const { categoryId, subcategoryId } = filter

  if (categoryId) {
    resultData.products = resultData.products.filter(
      p => p.grupo === categoryId
    )
  }
  if (subcategoryId) {
    resultData.products = resultData.products.filter(
      p => p.subgrupo === subcategoryId
    )
  }

  if (resultData.products && order) {
    resultData.products = resultData.products.sort(compareValues(order, 'asc'))
  }

  if (resultData.products && order) {
    resultData.products = resultData.products.sort(compareValues(order, 'asc'))
  }

  return resultData
}
