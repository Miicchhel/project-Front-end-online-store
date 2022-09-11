import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
    totalProdutos: 0,
  };

  componentDidMount() {
    const get = JSON.parse(localStorage.getItem('cart_items'));
    const totalP = get.map((item) => item.quantity);
    this.setState({
      cart: get,
      totalProdutos: this.somaQP(totalP),
    });
  }

  somaQP = (array) => (array.reduce((total, num) => (total + num), 0));

  removeProduct = (event) => {
    const { cart } = this.state;
    const { id } = event.target;
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart_items', JSON.stringify(newCart));
    const get = JSON.parse(localStorage.getItem('cart_items'));
    const totalP = get.map((item) => item.quantity);
    this.setState({
      cart: get,
      totalProdutos: this.somaQP(totalP),
    });
  };

  saveFavorite = (favorite) => localStorage
    .setItem('cart_items', JSON.stringify(favorite));

  decreaseQuantity = (event) => {
    const { cart } = this.state;
    const { id } = event.target;
    for (let index = 0; index < cart.length; index += 1) {
      if (cart[index].id === id) {
        if (cart[index].quantity > 1) cart[index].quantity -= 1;
        this.saveFavorite(cart);
      }
    }
    const get = JSON.parse(localStorage.getItem('cart_items'));
    const totalP = get.map((item) => item.quantity);
    this.setState({
      cart: get,
      totalProdutos: this.somaQP(totalP),
    });
  };

  increaseQuantity = (event) => {
    const { cart } = this.state;
    const { id } = event.target;
    for (let index = 0; index < cart.length; index += 1) {
      if (cart[index].id === id) {
        if (cart[index].quantity > 1) cart[index].quantity += 1;
        this.saveFavorite(cart);
      }
    }
    const get = JSON.parse(localStorage.getItem('cart_items'));
    const totalP = get.map((item) => item.quantity);
    this.setState({
      cart: get,
      totalProdutos: this.somaQP(totalP),
    });
  };

  render() {
    const { cart, totalProdutos } = this.state;
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
                onClick={ this.decreaseQuantity }
                id={ items.id }
              >
                Diminuir
              </button>
              <p>
                {items.quantity}
              </p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ this.increaseQuantity }
                id={ items.id }
              >
                Adicionar
              </button>
            </div>
          ))}
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <p data-testid="shopping-cart-product-quantity">
            { totalProdutos }
          </p>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
