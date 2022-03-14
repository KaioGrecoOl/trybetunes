import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class AlbumShow extends Component {
  render() {
    const { id, collection, imag } = this.props;
    // console.log(id);
    return (
      <div data-testid="page-album">
        <Header />
        <Link to={ `album/${id}` } data-testid={ `link-to-album-${id}` }>
          <p>{ collection }</p>
        </Link>
        <div>
          <img alt={ collection } src={ imag } />
        </div>
      </div>
    );
  }
}

export default AlbumShow;

AlbumShow.propTypes = {
  id: PropTypes.number,
  collectionId: PropTypes.number,
  collection: PropTypes.string,
}.isRequired;
