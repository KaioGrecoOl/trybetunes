import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      loginInput: '',
    };
    this.gettingUser = this.gettingUser.bind(this);
  }

  componentDidMount() {
    this.gettingUser();
  }

  async gettingUser() {
    this.setState({ loading: true });
    const userInf = await getUser();
    // console.log(userInf);
    this.setState({ loading: false,
      loginInput: userInf.name });
  }

  render() {
    const { loginInput, loading } = this.state;

    return (
      <div>
        <header data-testid="header-component">
          {loading
            ? (<Loading />)
            : (<h3 data-testid="header-user-name">{ loginInput }</h3>) }
          <nav>
            <Link to="/search" data-testid="link-to-search"> Search </Link>
            <Link to="/favorites" data-testid="link-to-favorites"> Favorite Songs </Link>
            <Link to="/profile" data-testid="link-to-profile"> Profile </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
