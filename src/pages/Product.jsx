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
    comment: '',
    email: '',
    available: false,
    rate: '',
    quantity: 1,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({
      image: data.thumbnail,
      name: data.title,
      price: data.price,
      available: false,
    });
  }

  saveCart = () => {
    const { match: { params: { id } } } = this.props;
    const { image, name, price, quantity } = this.state;
    const meuObj = { name, price, image, quantity, id };
    addProduct(meuObj);
  };

  handleGenericChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  checkFields = () => {
    const { comment, email } = this.state;
    if (!comment && !email) {
      this.setState({
        available: true,
      });
    } else {
      this.setState({
        available: false,
      });
    }
  };

  render() {
    const { image,
      name,
      price,
      comment,
      email,
      available,
      rate,
    } = this.state;
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
        {available
          ? <span data-testid="error-msg">Campos inválidos</span>
          : '' }
        <form>
          <input
            type="text"
            data-testid="product-detail-email"
            onChange={ this.handleGenericChange }
            value={ email }
            name="email"
          />
          <select name="select">
            <option
              data-testid="1-rating"
              onChange={ this.handleGenericChange }
              name="rate"
              value={ rate }
            >
              1
            </option>
            <option
              data-testid="2-rating"
              onChange={ this.handleGenericChange }
              name="rate"
              value={ rate }
            >
              2
            </option>
            <option
              data-testid="3-rating"
              onChange={ this.handleGenericChange }
              name="rate"
              value={ rate }
            >
              3
            </option>
            <option
              data-testid="4-rating"
              onChange={ this.handleGenericChange }
              name="rate"
              value={ rate }
            >
              4
            </option>
            <option
              data-testid="5-rating"
              onChange={ this.handleGenericChange }
              name="rate"
              value={ rate }
            >
              5
            </option>
          </select>
          <textarea
            data-testid="product-detail-evaluation"
            onChange={ this.handleGenericChange }
            value={ comment }
            name="comment"
          />
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.checkFields }
          >
            Enviar
          </button>
        </form>
        <Link data-testid="shopping-cart-button" to="/cart">Ir ao carrinho</Link>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.objectOf,
}.isRequired;
