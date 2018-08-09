import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className="container column centered">
            <Form>
                <input type="text" id="user" name="user" placeholder="Username" />
                <input type="password" id="pass" name="pass" placeholder="Password" />
            </Form>
        </div>
    );
  }
}

export default LoginForm;
