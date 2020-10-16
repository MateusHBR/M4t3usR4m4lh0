import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/home" component={Home} />
    <Route path="/pokemon/:id" component={Pokemon} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
