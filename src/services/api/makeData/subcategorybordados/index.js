import { compareValues } from 'mini-helper'

const data = {
  success: true,
  subcategoriesbordados: [
    { id: 1, name: 'Todos os Bordados.', onclick: () => {} },
    { id: 2, name: 'Bordados em Tecidos.', onclick: () => {} },
    { id: 3, name: 'Bordados em Bonés.', onclick: () => {} },
    { id: 4, name: 'Bordados em Vestuários', onclick: () => {} },
    { id: 5, name: 'Bordados em Acessórios.', onclick: () => {} },
    { id: 6, name: 'Bordados em outro Material.', onclick: () => {} },
    { id: 7, name: 'Bordados como uso de Lasers.', onclick: () => {} }
  ]
}

export async function getSubCategoryBordados(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategorybordados && order) {
    resultData.subcategorybordados = resultData.subcategorybordados.sort(
      compareValues(order, 'asc')
    )
    return resultData
  }
  return resultData
}
