import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom'
import './App.css';

import Main from './scenes/Main'
import Account from './scenes/Account'

class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={ Main } />
            <Route path='/account' component={ Account } />
            <Route render={() => <h1> Page Not Found </h1> } />
          </Switch>
        </div>
    );
  }
}

export default App;
