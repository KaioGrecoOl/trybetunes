import React, { Component } from 'react';
import Header from '../Components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <h2>Estou na página de favoritos</h2>
      </div>
    );
  }
}

export default Favorites;
