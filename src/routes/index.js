import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as page from '../pages';

const Routes = () => {
  <Switch>
    <Route
      exact
      path="/"
      component={ page.Home }
    />
  </Switch>
}

export default Routes;