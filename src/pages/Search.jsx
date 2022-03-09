import React, { Component } from 'react';
import Header from '../Components/Header';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h2>Estou na página de busca</h2>
      </div>
    );
  }
}

export default Search;
