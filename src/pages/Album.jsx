import React, { Component } from 'react';
import Header from '../Components/Header';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <h2>Estou na página de album</h2>
      </div>
    );
  }
}

export default Album;
