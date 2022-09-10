import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addProduct from '../services/localStorage';

class Card extends React.Component {
  saveCart = () => {
    const { name, price, image, productId } = this.props;
    const meuObj = { name, price, image, productId };
    addProduct(meuObj);
  };

  render() {
    const { name, price, image, productId } = this.props;
    return (
      <div>
        <Link data-testid="product-detail-link" to={ `/product/${productId}` }>
          <div className="card" data-testid="product">
            <img src={ image } alt={ name } />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h3>{productId}</h3>
          </div>
        </Link>
        <button type="button" data-testid="product-add-to-cart" onClick={ this.saveCart }>
          Adiciona ao carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Card;
