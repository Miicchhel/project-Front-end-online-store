import React from 'react';
<<<<<<< HEAD:src/Components/Home.jsx
import { getCategories } from '../services/api';
import Categories from './Categories';
=======
import { Link } from 'react-router-dom';
>>>>>>> adfb1496b960f75f4edd9236e4ca22da5430c846:src/pages/Home.jsx

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
      <div>
<<<<<<< HEAD:src/Components/Home.jsx

        <div>
          <input type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div>
          <Categories
            dataCategories={ dataCategories }
          />
        </div>
=======
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho de compras</Link>
>>>>>>> adfb1496b960f75f4edd9236e4ca22da5430c846:src/pages/Home.jsx
      </div>
    );
  }
}

export default Home;
