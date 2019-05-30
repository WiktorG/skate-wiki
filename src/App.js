import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => {
  return (
    <h2>Home</h2>
  )
}

const Favourites = () => {
  return (
    <h2>Favourites</h2>
  )
}

const NotFound = () => {
  return (
    <h2>404</h2>
  )
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <h1>Basic router example</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fav">Favourites</Link>
            </li>
          </ul>
        </nav>
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
