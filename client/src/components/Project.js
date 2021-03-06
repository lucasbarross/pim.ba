import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react'
import * as api from '../util/api.js';


class Project extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
      this.setState({created: this.props.userProject !== undefined });
    }
    
    render() {
    return (
        <a onClick={this.props.openProject} data-project={this.props.project._id} className="project container column">
            <h2> { this.props.project.name } </h2>
            <p> { this.props.project.description } </p>
        </a>
    );
  }
}

export default Project;
