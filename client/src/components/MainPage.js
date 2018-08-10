import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Navbar from './Navbar';

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div>
            <Navbar/>
        </div>
    );
  }
}

export default MainPage;
