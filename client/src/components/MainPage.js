import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Navbar from './Navbar';
import ShowProjectPage from './ShowProjectPage.js';
import * as api from '../util/api.js';
import AuthService from '../util/auth';
import ProjectsPage from './ProjectsPage.js';


class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        showPage:{
            projects: false
        },

        project: {
            categories: [],
            tasks: [],
            links: []
        },

        userProject: {},

    };
  }

  componentDidMount = async() => {
    let project = {
        "_id": "5b6ccce8064c8218c8f98d5f",
        "categories": [],
        "links": [],
        "name": "Projeto Top",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien massa, sollicitudin aliquet nibh eget, euismod ultrices felis. Sed molestie mattis quam nec sodales. Quisque laoreet urna quis eros tristique tristique ut in dui. Pellentesque sit amet posuere felis, vel sodales nisi.",
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
      this.openProject(project);
 }

    openProject = async (project) =>{
        // let project = await api.getProject(e.target.dataset.id, this.props.auth);
        let call = await api.getUserProject(project._id, this.props.auth.getToken())
        let res = call.data;
        console.log(project);
        this.setState({ userProject: res[0] , project: project, showPage: { projects: false} });
    }

  render() {
    return (
        <div>
            <Navbar auth = {this.props.auth}/>
            <div className="projectsPage">
                { this.state.showPage.projects ? 
                <ProjectsPage auth={this.props.auth} openProject={this.openProject}/> : 
                <ShowProjectPage auth={this.props.auth} project={this.state.project} userProject={this.state.userProject}/> }
            </div>
        </div>
    );
  }
}

export default MainPage;
