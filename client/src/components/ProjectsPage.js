import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Navbar from './Navbar';
import Project from './Project.js';
import * as api from '../util/api.js';
import AuthService from '../util/auth';


class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        userProjects: [],
        projects: []
    };
  }

  componentDidMount = async() => {
    // let projects = await api.getProjects([]);
    // let userProjects = await api.getUserProjects([]);
    //this.setState({userProjects: userProjects, projects: projects});
}
  /*openProject(project) {
    api.getUserProject(this.props.project._id, this.props.auth.getToken())
      .then(userProject => {
        this.setState({ userProject, project });
      });
  }*/

  render() {
    return (
        <div className="container column full">
            <h2 className="title-projects">Explorar</h2>
        </div>
    );
  }
}

export default MainPage;
