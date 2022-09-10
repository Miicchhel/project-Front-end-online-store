import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const get = JSON.parse(localStorage.getItem('cart_items'));
    this.setState({
      cart: get,
    });
  }

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <section>
        ShoppingCart
        <div>
          {cart.map((items, index) => (
            <div key={ index }>
              <img src={ items.image } alt={ items.name } />
              <h2 data-testid="shopping-cart-product-name">{items.name}</h2>
              <h3>{items.price}</h3>
              <h3>{items.productId}</h3>
            </div>
          ))}
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <p data-testid="shopping-cart-product-quantity">
            Total de produtos:
            {cart.length}
          </p>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
