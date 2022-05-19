/**
 *  ====== Layout dos Componentes Paginas
 * */
import { LayoutApp } from '../layouts/LayoutApp'

/**
 *  ====== Paginas do Component Menu Principal
 *
 *  opção Empresa
 */
import { PageApp } from '../page'
import { PageLogin } from '../page'

/**
 *  declaração das Routes
 */

export const inicialRoutes = [
  {
    exact: true,
    label: 'Inicial',
    path: 'pageapp',
    component: PageApp,
    layout: LayoutApp
  },
  {
    exact: true,
    label: 'Login',
    path: 'login',
    component: PageLogin,
    layout: LayoutApp
  }
]
/**
 * Exportação das rotas
 */
export const routeList = [
  ...inicialRoutes
]
