import React, { Component } from 'react';
import {Router,Route,IndexRoute, hashHistory,Link } from 'react-router';
//import logo from '../img/logo.svg';
import '../css/App.css';
import Users from './Users'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Users} />
          <Route path='/users' component={Users} />
          <Route path='/hari' component={Hari} />
          <Route path='*' component={Notfound} />
        </Route>
      </Router>
    );
  }
}
const Notfound=()=>(
  <div> Hi</div>
);
const Hari=()=>(
  <div> Hi hari
    <Link to='/users'> Users</Link>
  </div>


);


class Layout extends Component{
  render(){
    return(
      <div> 
        <div>Header</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default App;
