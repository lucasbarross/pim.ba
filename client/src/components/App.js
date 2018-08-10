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

  renderPage = (page) => {
    this.setState({pages: { [page]: true } })
  }

  setLogin = (bool) => {
    this.setState({login: bool})
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
        { this.state.pages.login ? 
          <Navbar/> 
          
        
        
        
        : <LoginForm auth={ this.auth } renderPage={this.renderPage} setLogin={this.setLogin}/> }
        
      </div>
    );
  }
}

export default App;
