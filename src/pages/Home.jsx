import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../Components/Categories';
import Card from '../Components/Card';

class Home extends React.Component {
  state = {
    nameInput: '',
    dataCategories: [],
    dataCard: [],
  };

  async componentDidMount() {
    const dataCategories = await getCategories();
    this.setState({
      dataCategories,
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

  render() {
    const { dataCategories, dataCard } = this.state;
    return (
      <section className="container">
        <aside className="container__categires">
          <Categories
            dataCategories={ dataCategories }
          />
        </aside>
        <section className="container__box">
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
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho de compras</Link>
        </section>
        { dataCard.length !== 0
          ? (
            <div>
              {dataCard.map((item, index) => (
                <Card
                  name={ item.title }
                  price={ item.price }
                  image={ item.thumbnail }
                  key={ index }
                />
              ))}
            </div>)
          : <p>Nenhum produto foi encontrado</p> }
      </section>
    );
  }
}

export default Home;
