import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      loginImput: '',
    };
    this.gettingUser = this.gettingUser.bind(this);
  }

  componentDidMount() {
    this.gettingUser();
  }

  async gettingUser() {
    this.setState({ loading: true });
    const userInf = await getUser();
    console.log(userInf);
    this.setState({ loading: false,
      loginImput: userInf.name });
  }

  render() {
    const { loginImput, loading } = this.state;

    return (
      <div>
        <header data-testid="header-component">
          {loading
            ? (<Loading />)
            : (<h3 data-testid="header-user-name">{ loginImput }</h3>) }
        </header>
      </div>
    );
  }
}

export default Header;
