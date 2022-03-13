import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

class Album extends Component {
  render() {
    const { id, collection, imag } = this.props;
    return (
      <div data-testid="page-album">
        <Header />
        <Link to={ `album/${id}` } data-testid={ `link-to-album-${id}` } />
        <p>{ collection }</p>
        <div>
          <img alt={ collection } src={ imag } />
        </div>
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  id: PropTypes.number,
  collectionId: PropTypes.number,
  collection: PropTypes.string,
}.isRequired;
