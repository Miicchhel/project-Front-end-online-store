import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import addProduct from '../services/localStorage';

export default class Product extends React.Component {
  state = {
    image: '',
    name: '',
    price: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({
      image: data.thumbnail,
      name: data.title,
      price: data.price,
    });
  }

  saveCart = () => {
    const { match: { params: { id } } } = this.props;
    const { image, name, price } = this.state;
    const meuObj = { name, price, image, id };
    addProduct(meuObj);
  };

  render() {
    const { image, name, price } = this.state;
    return (
      <div>
        <img data-testid="product-detail-image" src={ image } alt={ name } />
        <h2 data-testid="product-detail-name">{name}</h2>
        <h3 data-testid="product-detail-price">{price}</h3>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.saveCart }
        >
          Adiciona ao carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">add ao carrinho</Link>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.objectOf,
}.isRequired;
