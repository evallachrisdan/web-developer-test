import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <HomePage />} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
