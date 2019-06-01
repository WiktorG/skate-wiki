import React from 'react';
import { Route, Switch } from "react-router-dom";

import TabBar from './components/TabBar/TabBar';

import Home from './views/Home/Home';
import Favourites from './views/Favourites/Favourites';
import NotFound from './views/NotFound/NotFound';


const App = (props) => {
  return (
    <div className="App">
        <h1>AntDesign example</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fav" component={Favourites} />
          <Route component={NotFound} />
        </Switch>
        <TabBar/>
    </div>
  );
}

export default App;
