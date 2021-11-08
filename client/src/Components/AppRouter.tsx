import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { PrivateRoutes, PublicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/routerConst';



export const AppRouter = () => {
  const user = true;

  return (
    <Switch>
      {user && PrivateRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} />
      ))}

      {PublicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};
