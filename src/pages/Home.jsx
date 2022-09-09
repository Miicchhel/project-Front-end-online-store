import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Categories from './Categories';

class Home extends React.Component {
  state = {
    dataCategories: [],
  };

  async componentDidMount() {
    const dataCategories = await getCategories();
    this.setState({
      dataCategories,
    });
  }

  render() {
    const { dataCategories } = this.state;
    return (
      <section className="container">
        <aside className="container__categires">
          <Categories
            dataCategories={ dataCategories }
          />
        </aside>
        <section className="container__box">
          <input type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho de compras</Link>
        </section>
      </section>
    );
  }
}

export default Home;
