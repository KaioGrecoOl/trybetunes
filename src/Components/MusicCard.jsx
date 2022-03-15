import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false,
      saveFavoritSong: false,
      favoritMusics: [],
    };
  }

  componentDidMount = async () => {
    const { musicList } = this.props;
    this.setState({ loading: true });
    const responseFavoriteSongApi = await getFavoriteSongs();
    this.setState({ favoritMusics: responseFavoriteSongApi,
      loading: false });
    const { favoritMusics } = this.state;
    // console.log(favoritMusics);
    if (favoritMusics.some(
      (element) => (element.trackId === musicList.trackId),
    )) {
      this.setState({ saveFavoritSong: true });
    }
  }

  saveFavoriteMusic = async ({ target }) => {
    const { musicList } = this.props;
    this.setState({ loading: true });
    if (target.checked === true) {
      // console.log(target.checked);
      await addSong(musicList);
    }
    this.setState({ loading: false, saveFavoritSong: true });
  }

  render() {
    const { musicList } = this.props;
    const { loading, saveFavoritSong } = this.state;
    // console.log('Music list: ', musicList);s
    return (
      <div>
        <span>{ musicList.trackName }</span>
        <audio data-testid="audio-component" src={ musicList.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor="favoritMusics">
          Favorita
          <input
            type="checkbox"
            name="favoritMusics"
            data-testid={ `checkbox-music-${musicList.trackId}` }
            onChange={ this.saveFavoriteMusic }
            checked={ saveFavoritSong }
          />
        </label>
        { loading && <Loading />}
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  musicList: PropTypes.string,
}.isRequired;
