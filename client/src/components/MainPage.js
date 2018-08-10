import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Navbar from './Navbar';
import Project from './Project.js';
import * as api from '../util/api.js';
import AuthService from '../util/auth';
import ProjectsPage from './ProjectsPage.js';


class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        showPage:{
            projects: false
        }
    };
  }

  componentDidMount = async() => {
    this.setState({showPage: { projects: true }});
 }

    openProject = async (e) =>{
        // let project = await api.getProject(e.target.dataset.id, this.props.auth);
        this.setState({showPage: { projects: false, project: true }});
    }

  render() {
    return (
        <div>
            <Navbar/>
            <div className="projectsPage">
                { this.state.showPage.projects? <ProjectsPage auth={this.props.auth} openProject={this.openProject}/> : '' }
            </div>
        </div>
    );
  }
}

export default MainPage;
