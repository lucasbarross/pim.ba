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

  componentWillMount = async() => {
    console.log("q")
    let projects = await api.getProjects([]);
    let userProjects = await api.getUserProjects(this.props.auth.getToken());
    console.log(projects.data)
    console.log(userProjects.data)
    this.setState({userProjects: userProjects.data, projects: projects.data});
  }

  render() {
    let projects = this.state.projects.map((project) => {
      return <Project key={project._id} openProject={this.props.openProject} project={project}/>
    })

    return (
        <div className="container column full">
            <h2 className="title-explore">Explorar</h2>
            <div className="hr"/>
          <div className="container wrap row">
            {projects}
          </div>
          
        </div>
        
    );
  }
}

export default MainPage;
