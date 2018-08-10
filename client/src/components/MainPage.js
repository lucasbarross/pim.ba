import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Navbar from './Navbar';
import { Project } from './Project';
import * as api from '../util/api.js';
import AuthService from '../util/auth';


class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      project: undefined,
      userProject: undefined,
    };
  }

  openProject(project) {
    api.getUserProject(this.props.project._id, this.props.auth.getToken())
      .then(userProject => {
        this.setState({ userProject, project });
      });
  }

  render() {
    return (
        <div>
            <Navbar/>
            { this.state.project ? <Project project = { this.state.project } userProject = { this.state.userProject } /> : '' }
        </div>
    );
  }
}

export default MainPage;
