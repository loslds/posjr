import { compareValues } from 'mini-helper'
const data = {
  success: true,
  subcategorieslasers: [
    { id: 1, name: 'Todos com Laser.', onclick: () => {} },
    { id: 2, name: 'Laser em Acrílico.', onclick: () => {} },
    { id: 3, name: 'Laser em M D F.', onclick: () => {} },
    { id: 4, name: 'Laser em Madeiras.', onclick: () => {} },
    { id: 5, name: 'Laser em Tecidos.', onclick: () => {} },
    {
      id: 6,
      name: 'Laser em Couro, Courino ou Semelhante.',
      onclick: () => {}
    },
    { id: 7, name: 'Laser em Metais.', onclick: () => {} },
    { id: 8, name: 'Laser em outros Materiais.', onclick: () => {} }
  ]
}

export async function getSubCategoryLasers(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategorylasers && order) {
    resultData.subcategorylasers = resultData.subcategorylasers.sort(
      compareValues(order, 'asc')
    )
    return resultData
  }
  return resultData
}
