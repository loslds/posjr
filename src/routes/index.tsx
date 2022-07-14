import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '~/pages/HomePage';

import { IRoute, RouteList } from './RouteList';

export const AppRoutes: React.FC = () => {
  const renderRoutes = (routes: IRoute[]) => {
    return routes.map(({ path, element: Element }) => {
      return <Route key={`route-${path}`} path={path} element={Element} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/*<Route index element={<AccesPg0 />} />
        <Route index element={<AccesPg1 />} />
        <Route index element={<AccesPg2 />} />
        <Route index element={<AccesPg3 />} />
        <Route index element={<AccesSb0 />} /> */}
        {renderRoutes(RouteList)}
      </Routes>
    </BrowserRouter>
  );
};

// import React from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import { routeList } from './routeList';

// function RouteWithSubRoutes(route) {
//   const logged = true;

//   function BuildRoute(p) {
//     const { component: Component, layout: Layout, privated } = p;

//     if (!logged && privated) return <Redirect to="/" />;

//     return (
//       <Layout>
//         <Component {...p} />
//       </Layout>
//     );
//   }
//   return <Route exact={!!route.exact} path={route.path} render={prop => <BuildRoute {...prop} {...route} />} />;
// }

// export default function MainRouter() {
//   const routes = [...routeList];

//   return (
//     <BrowserRouter>
//       <Switch>
//         {routes.map((route, i) => {
//           const key = `route-${i}`;
//           return <RouteWithSubRoutes key={key} {...route} />;
//         })}
//         ;
//       </Switch>
//     </BrowserRouter>
//   );
// }
