import React, { Component } from 'react';
import {Router,Route,IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import logo from '../img/logo.svg';
import '../css/App.css';
import Users from './Users'
import Layout from'./Layouts'
import Notfound from'./Notfound'
import Hari from'./Hari'
import Prasad from './Prasad'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Notfound} />
            <Route path='/users' component={Users} />
            <Route path='/hari' component={Hari} />
            <Route path='*' component={Notfound} />
            <Route path='./prasad' component={Prasad}/>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}
export default App;
