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
            links: []
        },

        userProject: {},

    };
  }

  componentDidMount = async() => {
      this.setState({showPage: { projects: true }})
    // let project = {
    //     "_id": "5b6ccce8064c8218c8f98d5f",
    //     "categories": [],
    //     "links": [],
    //     "name": "Projeto Top",
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien massa, sollicitudin aliquet nibh eget, euismod ultrices felis. Sed molestie mattis quam nec sodales. Quisque laoreet urna quis eros tristique tristique ut in dui. Pellentesque sit amet posuere felis, vel sodales nisi.",
    //     "type": 1,
    //     "tasks": [
    //         {
    //             "text": "bbbb",
    //             "_id": "5b6ccce8064c8218c8f98d5d"
    //         },
    //         {
    //             "text": "aaaa",
    //             "_id": "5b6ccce8064c8218c8f98d5e"
    //         }
    //     ],
    //     "author": "5b6cc7c3e3e9d51b14ef1c8a",
    //   }
    //   this.openProject(project);
 }

    openProject = async (e) =>{
        let id = e.target.dataset.project;
        console.log(e.target.dataset.project)
        let project = await api.getProject(id);
        let call = await api.getUserProject(id, this.props.auth.getToken())
        let res = call.data;
        this.setState({userProject: res[0], project: project.data, showPage: { projects: false} });
    }

  render() {
    return (
        <div>
            <Navbar auth = {this.props.auth}/>
            <div className="projectsPage">
                { this.state.showPage.projects ? 
                <ProjectsPage auth={this.props.auth} openProject={this.openProject}/> : 
                <ShowProjectPage auth={this.props.auth} createUserProject = {this.createUserProject} project={this.state.project} userProject={this.state.userProject}/> }
            </div>
        </div>
    );
  }
}

export default MainPage;
