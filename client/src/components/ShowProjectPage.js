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
      let tasks = this.props.project.tasks
        .map(task => ({ ...task, done: this.props.userProject.doneTasks.find(dt => dt === task._id) !== undefined}));
      this.setState({created: this.props.userProject !== undefined, tasks });
  }

  render() {
    let tasks = this.state.tasks.map(task => <li> <Checkbox></Checkbox> {task.text} : {task.done}</li>)
    let projectName = this.props.project.name ? this.props.project.name : '';
    let projectDescription = this.props.project.description ? this.props.project.description: '';
    return (
        <div className="container column full">
            <p className= 'title-projects'>
                {projectName.toUpperCase()}
            </p>
            <p className="description">{projectDescription}</p>
            <Checkbox className="checkbox" checked={true} label='Make my profile visible' />
        </div>
    );
  }
}

export default ShowProjectPage;
