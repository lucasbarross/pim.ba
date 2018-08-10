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
    let project = {
      "_id": "5b6ccce8064c8218c8f98d5f",
      "categories": [],
      "links": [],
      "name": "Projeto Top",
      "description": "123",
      "type": 1,
      "tasks": [
          {
              "text": "bbbb",
              "_id": "5b6ccce8064c8218c8f98d5d"
          },
          {
              "text": "aaaa",
              "_id": "5b6ccce8064c8218c8f98d5e"
          }
      ],
      "author": "5b6cc7c3e3e9d51b14ef1c8a",
    }
    this.openProject(project)
}
  openProject(project) {
    api.getUserProject(project._id, this.props.auth.getToken())
      .then(userProject => {
        this.setState({ userProject, project });
      });
  }

  render() {
    return (
        <div className="container column full">
            <h2 className="title-projects">Explorar</h2>
        </div>
    );
  }
}

export default MainPage;
