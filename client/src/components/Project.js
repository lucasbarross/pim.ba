import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import * as api from '../util/api.js';


class Project extends Component {

  constructor(props){
    super(props);
    this.state = {
        created: false,
        userProject: null,
        tasks: [],
    }
  }

  componentDidMount() {
      let tasks = this.props.project.tasks
      .map(task => ({ ...task, done: this.props.userProject.doneTasks.find(dt => dt === task._id) !== undefined}));
      this.setState({created: this.props.userProject !== undefined, tasks });
  }

  render() {
    let tasks = this.state.tasks.map(task => <li>{task.text} : {task.done}</li>)
    return (
        <div className="container column centered">
            {this.props.project.name}
            {this.props.project.description}
            {tasks}
        </div>
    );
  }
}

export default Project;
