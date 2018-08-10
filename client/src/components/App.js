import React, { Component } from 'react';
import LoginForm from './LoginForm';
import MainPage from './MainPage';
import * as api from '../util/api.js';
import Auth from '../util/auth.js';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false
    }
  }

  setLogin = (bool) => {
    this.setState({ login: bool })
  }

  componentDidMount = async () => {
    this.auth = new Auth();
    try{
      const userInfo = await this.auth.loggedIn();
      this.setState({user: userInfo, login: true });
    } catch (err) {
      this.setState({ login : false }); 
      console.log(err.message);
    } 
  }

  render() {
    return (
      <div className="full">
        { this.state.login ? 
          <MainPage auth = {this.auth}/>
        : <div className="container full centered"><LoginForm auth={ this.auth } renderPage={this.renderPage} setLogin={this.setLogin}/></div> }
      </div>
    );
  }
}

export default App;
