import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import Pokemons from '../pages/Pokemons';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/pokemons" component={Pokemons} />
  </Switch>
);

export default Routes;
