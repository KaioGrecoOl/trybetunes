import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <main>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/search" component={ Search } />
            <Route path="/album/:id" render={ (props) => (<Album { ...props } />) } />
            <Route exact path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
