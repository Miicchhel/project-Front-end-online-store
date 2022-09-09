import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ ShoppingCart } />
            <Route exact path="/product/:id" component={ Product } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
