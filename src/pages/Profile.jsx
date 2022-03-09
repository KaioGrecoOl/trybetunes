import React, { Component } from 'react';
import Header from '../Components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <h2>Estou na página de profile</h2>
      </div>
    );
  }
}

export default Profile;
