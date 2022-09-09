import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
