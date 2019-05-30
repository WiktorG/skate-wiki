import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav/Nav';

import Home from './views/Home/Home';
import Favourites from './views/Favourites/Favourites';
import NotFound from './views/NotFound/NotFound';


const App = () => {
  return (
    <div className="App">
      <Router>
        <h1>Basic redux example - Counter</h1>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fav" component={Favourites} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
