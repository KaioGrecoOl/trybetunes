import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../Components/MusicCard';

// import AlbumShow from '../Components/AlbumShow';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      album: [],
      artisName: '',
      albumName: '',
    };
  }

  componentDidMount = () => {
    this.callGetMusicsApi();
  }

  callGetMusicsApi = async () => {
    const { match: { params: { id } } } = this.props;
    const responseGetMusicsApi = await getMusics(id);
    // console.log(responseGetMusicsApi);
    this.setState({ album: responseGetMusicsApi,
      artisName: responseGetMusicsApi[0].artistName,
      albumName: responseGetMusicsApi[0].collectionName });
  }

  render() {
    const { album, artisName, albumName } = this.state;
    // console.log(this.props);
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">{ artisName }</h2>
        <h2 data-testid="album-name">{ albumName }</h2>
        <div>
          {album.length > 0 && album.filter((element) => element.trackId)
            .map((track) => (
              <MusicCard
                key={ track.trackId }
                musicList={ track }
              />
            ))}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Album;
