import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories,
  getProductFromCategory,
  getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../Components/Categories';
import Card from '../Components/Card';

class Home extends React.Component {
  state = {
    nameInput: '',
    dataCategories: [],
    dataCard: [],
    dataProductsFromCategories: [],
    cart: [],
  };

  async componentDidMount() {
    const dataCategories = await getCategories();
    const get = JSON.parse(localStorage.getItem('cart_items'));
    this.setState({
      dataCategories,
      cart: get,
    });
  }

  handleName = (event) => {
    this.setState({
      nameInput: event.target.value,
    });
  };

  handleClick = async () => {
    const { nameInput } = this.state;
    const data = await getProductsFromCategoryAndQuery(nameInput, nameInput);
    const { results } = data;
    this.setState({
      dataCard: results,
    });
  };

  handleProduct = async (event) => {
    const products = await getProductFromCategory(event.target.id);
    this.setState({
      dataProductsFromCategories: products.results,
    });
  };

  render() {
    const { dataCategories,
      dataCard,
      dataProductsFromCategories,
      cart } = this.state;
    return (
      <section className="container">
        <aside className="container__categires">
          <Categories
            dataCategories={ dataCategories }
            handleProduct={ this.handleProduct }
          />
        </aside>
        <section className="container__box">
          <div className="container__box__busca">
            <input type="text" data-testid="query-input" onChange={ this.handleName } />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          { dataCard.length !== 0
            ? (
              <div className="container__box__card">
                {dataCard.map((item, index) => (
                  <Card
                    productId={ item.id }
                    name={ item.title }
                    price={ item.price }
                    image={ item.thumbnail }
                    key={ index }
                  />
                ))}
              </div>)
            : <p>Nenhum produto foi encontrado</p> }
          <div className="container__box__card">
            {dataProductsFromCategories.map((products, index) => (
              <Card
                productId={ products.id }
                data-testid="product"
                name={ products.title }
                price={ products.price }
                image={ products.thumbnail }
                key={ index }
              />))}
          </div>
        </section>
        <Link
          to="/cart"
          className="cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
          <p data-testid="shopping-cart-product-quantity">
            Total de produtos:
            {cart.length}
          </p>
        </Link>
      </section>
    );
  }
}

export default Home;
