import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import * as api from '../util/api.js';
import Auth from '../util/auth.js';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pages: {
        projects: false,
        login: false
      },

      projects: {
        tags: []
      }
    }
  }

  componentDidMount = async () => {
    this.auth = new Auth();
    try{
      const userInfo = await this.auth.loggedIn();
      this.setState({user: userInfo, pages: { projects: true } });
    } catch (err) {
      this.setState({ pages: { login: false } }); 
      console.log(err.message);
    }
  }

  render() {
    return (
      <div className="container full centered">
        { this.state.pages.login ? <Navbar/> : '' }
        { !this.state.pages.login ? <LoginForm/> : '' }
      </div>
    );
  }
}

export default App;
