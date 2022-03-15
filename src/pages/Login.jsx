import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Loading from '../Components/Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginButtonDisabled: true,
      loginInput: '',
      loading: false,
      redirect: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validationButton = this.validationButton.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.validationButton());
  }

  async buttonSave() {
    const { loginInput } = this.state;
    this.setState({ loading: true });
    await createUser({ name: loginInput });
    this.setState({ loading: false,
      redirect: true,
    });
  }

  validationButton() {
    const minimLetter = 3;
    const { loginInput } = this.state;

    if (loginInput.length >= minimLetter) {
      this.setState({ isLoginButtonDisabled: false });
    } else {
      this.setState({ isLoginButtonDisabled: true });
    }
  }

  render() {
    const { loginInput,
      isLoginButtonDisabled, loading, redirect } = this.state;

    return (
      <div data-testid="page-login">
        {loading
          ? (<Loading />)
          : (
            <form>
              <label htmlFor="loginInput">
                Login:
                <input
                  type="text"
                  name="loginInput"
                  value={ loginInput }
                  data-testid="login-name-input"
                  onChange={ this.onInputChange }
                  placeholder="Name"
                />
              </label>
              <button
                type="button"
                disabled={ isLoginButtonDisabled }
                data-testid="login-submit-button"
                onClick={ () => this.buttonSave() }
              >
                Entrar
              </button>
              { redirect && <Redirect to="/search" /> }
            </form>
          )}
      </div>
    );
  }
}

export default Login;
