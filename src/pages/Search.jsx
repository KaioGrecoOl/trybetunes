import React, { Component } from 'react';
import Header from '../Components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistInput: '',
      isSearchButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ artistInput: value },
      this.validationButtons);
  }

  validationButtons = () => {
    const minimLetter = 2;
    const { artistInput } = this.state;

    if (artistInput.length >= minimLetter) {
      this.setState({ isSearchButtonDisabled: false });
    } else {
      this.setState({ isSearchButtonDisabled: true });
    }
  }

  render() {
    const { artistInput, isSearchButtonDisabled } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <nav>
          <form>
            <label htmlFor="searchArtist">
              Search:
              <input
                data-testid="search-artist-input"
                type="text"
                placeholder="Artist, songs"
                name="searchArtist"
                value={ artistInput }
                onChange={ this.handleChange }
              />
            </label>

            <button
              type="button"
              disabled={ isSearchButtonDisabled }
              data-testid="search-artist-button"
            >
              Pesquisar
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Search;
