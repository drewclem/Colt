import React, { Component } from 'react';
import '../css/App.css';
import '../css/projectboard.css';
import '../css/bootstrap/css/bootstrap.min.css';
import List from '../components/List'

class ProjectBoard extends Component {

  render() {
    return (
      <div className="ProjectBoard container">
        <List />
      </div>
    );
  }
}

export default ProjectBoard;
