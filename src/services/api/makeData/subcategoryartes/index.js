// import Api from '../../requester'
import { compareValues } from 'mini-helper'
const data = {
  success: true,
  subcategoriesartes: [
    { id: 1, name: 'Todas as Artes.', onclick: () => {} },
    { id: 2, name: 'Artes com Bordados.', onclick: () => {} },
    { id: 3, name: 'Artes com Bordados em Tecidos.', onclick: () => {} },
    { id: 4, name: 'Artes com Bordados em Bonés.', onclick: () => {} },
    { id: 5, name: 'Artes com Bordados em Vestuários.', onclick: () => {} },
    { id: 6, name: 'Artes com Bordados em Acessórios.', onclick: () => {} },
    { id: 7, name: 'Artes com Bordados em outro Material.', onclick: () => {} },
    { id: 8, name: 'Artes a Lasers.', onclick: () => {} },
    { id: 9, name: 'Artes a Lasers em Acrílico.', onclick: () => {} },
    { id: 10, name: 'Artes a Lasers em M D F.', onclick: () => {} },
    { id: 11, name: 'Artes a Lasers em Madeiras.', onclick: () => {} },
    { id: 12, name: 'Artes a Lasers em Tecidos.', onclick: () => {} },
    {
      id: 13,
      name: 'Artes a Lasers em Couro, Courino ou Semelhante.',
      onclick: () => {}
    },
    { id: 14, name: 'Artes a Lasers em Metais.', onclick: () => {} },
    { id: 15, name: 'Artes a Lasers em outros Materiais.', onclick: () => {} }
  ]
}

export async function getSubCategoryArtes(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategoryartes && order) {
    resultData.subcategoryartes = resultData.subcategoryartes.sort(
      compareValues(order, 'asc')
    )
    return resultData
  }
  return resultData
}
