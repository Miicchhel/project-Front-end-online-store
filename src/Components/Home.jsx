import React from 'react';
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
      <div>

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
      </div>
    );
  }
}

export default Home;
