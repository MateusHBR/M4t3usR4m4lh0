import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Pokemons from '../pages/Pokemons';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/pokemons" component={Pokemons} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
