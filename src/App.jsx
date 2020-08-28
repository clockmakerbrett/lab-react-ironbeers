import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import SingleView from './views/SingleView';
import RandomView from './views/RandomView';
import NewView from './views/NewView';
import BeersView from './views/BeersView';

function App() {
  return (
    <Switch>
      <Route path="/beers" component={BeersView} exact />
      <Route path="/" component={HomeView} exact />
      <Route path="/random-beer" component={RandomView} exact />
      <Route path="/new-beer" component={NewView} exact />
      <Route path="/beers/:id" component={SingleView} />
    </Switch>
  );
}

export default App;
