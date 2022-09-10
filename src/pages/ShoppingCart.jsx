import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
    quantity: [],
  };

  componentDidMount() {
    const get = JSON.parse(localStorage.getItem('cart_items'));
    const newArray = [];
    get.forEach((item) => newArray.push(item.quantity));
    this.setState({
      cart: get,
      quantity: newArray,
    });
  }

  setCart = (newCart) => {
    const newArray = [];
    newCart.forEach((item) => newArray.push(item.quantity));
    this.setState({
      cart: newCart,
      quantity: newArray,
    });
    localStorage.setItem('cart_items', JSON.stringify(newCart));
  };

  removeProduct = (event) => {
    const { cart } = this.state;
    const { id } = event.target;
    this.setCart(cart.filter((product) => product.id !== id));
  };

  decreaseQuantity = (index) => {
    const { quantity } = this.state;
    if (quantity[index] > 1) {
      const newValue = quantity[index] - 1;
      quantity[index] = newValue;
      this.setState({
        quantity,
      });
    }
  };

  increaseQuantity = (index) => {
    const { quantity } = this.state;
    const newValue = quantity[index] + 1;
    quantity[index] = newValue;
    this.setState({
      quantity,
    });
  };

  render() {
    const { cart, quantity } = this.state;
    // const { quantity } = this.props;
    // console.log(cart);
    return (
      <section>
        ShoppingCart
        <div>
          {cart.map((items, index) => (
            <div key={ index }>
              <button
                data-testid="remove-product"
                type="button"
                onClick={ this.removeProduct }
                id={ items.id }
              >
                X
              </button>
              <img src={ items.image } alt={ items.name } />
              <h2 data-testid="shopping-cart-product-name">{items.name}</h2>
              <h3>{items.price}</h3>
              <h3>{items.id}</h3>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.decreaseQuantity(index) }
              >
                Diminuir
              </button>
              <p>
                {quantity[index]}
              </p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.increaseQuantity(index) }
              >
                Adicionar
              </button>
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
