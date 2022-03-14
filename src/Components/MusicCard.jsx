import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = { loading: false,
    };
  }

  // componentDidMount() {
  //   this.callGetMusicsApi();
  // }

  saveFavoriteMusic = async ({ target }) => {
    const { musicList } = this.props;
    this.setState({ loading: true });
    if (target.checked === true) {
      // console.log(target.checked);
      await addSong(musicList);
    }
    this.setState({ loading: false });
  }

  // callGetMusicsApi = async () => {
  //   const { musicList } = this.props;
  //   const responseGetMusicsApiFavo = await addSong(musicList);
  //   return responseGetMusicsApiFavo;
  // }

  render() {
    const { musicList } = this.props;
    const { loading } = this.state;
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
