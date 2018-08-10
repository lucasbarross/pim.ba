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
       this.setState({created: this.props.userProject !== undefined });
    }


    async check(task) {
        if(!this.props.userProject) {
            await this.props.createUserProject();
        }
        await api.updateTasks(this.props.auth.getToken(), this.props.userProject._id, [ ...this.props.tasks.map(t => t._id), task._id]);
    }

    render() {
    let tasks = [];
    if (this.props.project.tasks) {
        tasks = this.props.project.tasks = this.props.project.tasks.map(task => <p> <div><Checkbox onChange = {(e) => this.check(task)} style = {{fontSize: '30px', padding: '10px'}} label = {task.text} defaultChecked = {task.done} /> </div> {task.description} </p>);
    }

    let projectName = this.props.project.name ? this.props.project.name : '';
    let projectDescription = this.props.project.description ? this.props.project.description: '';
    return (
        <div className="container column full">
            <p className= 'title-projects'>
                {projectName.toUpperCase()}
            </p>
            <p className="description">{projectDescription}</p>
            { tasks }
        </div>
    );
  }
}

export default ShowProjectPage;
