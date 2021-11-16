import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Context } from '../Context/Context';
import { PrivateRoutes, PublicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/routerConst';
import { IContx } from './forms/authForm/AuthForm';



export const AppRouter = () => {
 
  const { user } = useContext<IContx>(Context);

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
