import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react'
import * as api from '../util/api.js';


class ShowProjectPage extends Component {

  constructor(props){
    super(props);
    this.state = {
        created: false,
        tasks: []
    }
  }

  componentDidMount = () => {
      const formatTasks = this.props.project.tasks;
      this.setState({created: this.props.userProject !== undefined });
    }
    
    render() {
    let tasks = [];
    if (this.props.project.tasks && this.props.userProject) {
        // tasks = formatTasks.map(task => <li> <Checkbox label = {task.text} checked = {task.done} /></li>)
    }
    let projectName = this.props.project.name ? this.props.project.name : '';
    let projectDescription = this.props.project.description ? this.props.project.description: '';
    return (
        <div className="container column full">
            <p className= 'title-projects'>
                {projectName.toUpperCase()}
            </p>
            <p className="description">{projectDescription}</p>
        </div>
    );
  }
}

export default ShowProjectPage;
