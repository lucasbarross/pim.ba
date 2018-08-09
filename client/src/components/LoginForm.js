import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  handleForm = (e) => {
    this.setState({[e.target.name]: [e.target.value]});
  }

  login = async (e) => {
    this.props.auth.login({username: this.state.user, password: this.state.pass}).then(() => this.props.render("projects"));  
  }

  render() {
    return (
        <div className="container column centered">
            <Form onSubmit={this.login}>
                <input onChange={this.handleForm} type="text" id="user" name="user" placeholder="Username" />
                <input onChange={this.handleForm} type="password" id="pass" name="pass" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </div>
    );
  }
}

export default LoginForm;
