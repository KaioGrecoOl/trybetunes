import React, { Component } from 'react';
import Header from '../Components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../Components/Loading';
import AlbumShow from '../Components/AlbumShow';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistInput: '',
      isSearchButtonDisabled: true,
      loading: false,
      albums: [],
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ artistInput: value }, this.validationButtons);
  }

  validationButtons = () => {
    const minimLetter = 2;
    const { artistInput } = this.state;

    if (artistInput.length >= minimLetter) {
      this.setState({ isSearchButtonDisabled: false });
    } else {
      this.setState({ isSearchButtonDisabled: true });
    }
  };

  async buttonSave() {
    const { artistInput } = this.state;
    this.setState({ title: artistInput });
    const searchAlbum = await searchAlbumsAPI(artistInput);
    this.setState({ loading: true });
    this.setState({ loading: false,
      albums: searchAlbum,
      artistInput: '' });
  }

  render() {
    const { artistInput,
      isSearchButtonDisabled, loading, albums, title } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        { loading && <Loading />}
        <section>
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
              onClick={ () => this.buttonSave() }
            >
              Pesquisar
            </button>
          </form>
        </section>
        <main>
          <div>
            <h2>{ `Resultado de álbuns de: ${title}` }</h2>
            {albums.length > 0
              ? albums.map((element) => (
                <AlbumShow
                  key={ element.collectionId }
                  collection={ element.collectionName }
                  id={ element.collectionId }
                  imag={ element.artworkUrl100 }
                />))
              : <span>Nenhum álbum foi encontrado</span>}
          </div>
        </main>
      </div>
    );
  }
}

export default Search;
