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


    async check(task, e) {
        if(!this.props.userProject) {
            await this.props.createUserProject();
        }
        let newArray;
        if (task.done) {
            newArray = this.props.userProject.doneTasks.filter(dt => dt !== task._id);
        } else {
            newArray = [ ...this.props.userProject.doneTasks, task._id];
        }
        console.log(newArray);
        await api.updateTasks(this.props.auth.getToken(), this.props.userProject._id, { doneTasks: newArray });
    }

    render() {
    let tasks = [];
    let formatTasks = [];
    if (this.props.project.tasks) {
        if(this.props.userProject) {
            console.log(this.props.userProject)
            formatTasks = this.props.project.tasks.map(t => ({ text: t.text, description: t.description, done: this.props.userProject.doneTasks.find(dt => dt == t._id) !== undefined }) ); 
        } else {
            formatTasks = this.props.project.tasks.map(t => ({ ...t, done: false})); 
        }
        tasks = formatTasks.map(task => <p> <div><Checkbox onChange = {(e) => this.check(task, e)} style = {{fontSize: '30px', padding: '10px'}} label = {task.text} defaultChecked = {task.done} /> </div> {task.description} </p>);
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
