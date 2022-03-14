import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { musicList } = this.props;
    console.log('Music list: ', musicList);
    // console.log('Preview url: ', previewUrl);
    return (
      <div>
        <span>{ musicList.trackName }</span>
        <audio data-testid="audio-component" src={ musicList.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {/* <h3>{ musicList }</h3> */}
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  musicList: PropTypes.string,
}.isRequired;
