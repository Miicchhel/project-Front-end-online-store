import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { dataCategories, handleProduct } = this.props;
    return (
      <div>
        {dataCategories.map((categorias) => (
          <p key={ categorias.id }>
            <input
              data-testid="category"
              type="checkbox"
              id={ categorias.id }
              className="input__checkbox"
              onChange={ handleProduct }
            />
            <label data-testid htmlFor={ categorias.id }>
              {categorias.name}
            </label>
          </p>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  dataCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  handleProduct: PropTypes.func.isRequired,
};

export default Categories;
