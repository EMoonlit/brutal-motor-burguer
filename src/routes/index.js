import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as page from '../pages';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ page.Home }
    />
    <Route
      path="/burguers/:id"
      component={ page.Details }
    />
  </Switch>
)

export default Routes;