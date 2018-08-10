import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Navbar from './Navbar';
import Project from './Project.js';
import * as api from '../util/api.js';
import AuthService from '../util/auth';


class CheckboxInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
        <div>
                  <Form.Field id="checkboxes">
                    <input onChange={this.props.handleCheckboxChange} data-id={this.props.id} name="title" placeholder='Titulo da Checkbox' />
                  </Form.Field>
        </div>
    );
  }
}

export default CheckboxInfo;