import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { dataCategories } = this.props;
    return (
      <div>
        {dataCategories.map((categorias) => (
          <p key={ categorias.id }>
            <input data-testid="category" type="checkbox" id={ categorias.id } />
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
  dataCategories: PropTypes.arrayOf.isRequired,
};

export default Categories;
