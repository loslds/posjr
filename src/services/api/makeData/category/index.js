// import Api from '../../requester'

import { compareValues } from 'mini-helper'

const data = {
  success: true,
  categories: [
    { id: 1, name: 'Artes.', onclick: () => {} },
    { id: 2, name: 'Bordados.', onclick: () => {} },
    { id: 3, name: 'Lasers.', onclick: () => {} }
  ]
}

export async function getCategory(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.categories && order) {
    resultData.categories = resultData.categories.sort(
      compareValues(order, 'asc')
    )
  }
  return resultData
}

/** Categorias e Sub Categorias para  Filtragem
 * Categorias
 * 1 - Artes
 *  Sub-Categories Arte
 *  1  - Todas as Artes.
 *  2  - Artes com Bordados.
 *  3  - Artes com Bordados em Tecidos.
 *  4  - Artes com Bordados em Bonés.
 *  5  - Artes com Bordados em Vestuários.
 *  6  - Artes com Bordados em Acessórios.
 *  7  - Artes com Bordados em outro Material.
 *  8  - Artes a Lasers.
 *  9  - Artes a Lasers com Acrílico.
 *  10 - Artes a Lasers com M D F.
 *  11 - Artes a Lasers com Madeiras.
 *  12 - Artes a Lasers com Tecidos.
 *  13 - Artes a Lasers com Couro, Courino ou Semelhante.
 *  14 - Artes a Lasers com Metais.
 *  15 - Artes a Lasers com outros Materiais.
 * Categorias
 * 2 - Bordados
 *  Sub-Categories Bordados
 *  1 - Todos os Bordados.
 *  2 - Bordados em Tecidos.
 *  3 - Bordados em Bonés.
 *  4 - Bordados em Vestuários.
 *  5 - Bordados em Acessórios.
 *  6 - Bordados em outro Material.
 *  7 - Bordados com uso de Lasers.
 * Categorias
 * 3 - Laser
 *  Sub-Categories Lasers *
 *  1 - Todos com Laser.
 *  2 - Laser em Acrílico.
 *  3 - Laser em M D F.
 *  4 - Laser em Madeiras.
 *  5 - Laser em Tecidos.
 *  6 - Laser em Couro, Courino ou Semelhante.
 *  7 - Laser em Metais.
 *  8 - Laser em outros Materiais.
 */
