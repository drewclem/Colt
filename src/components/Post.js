import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/App.css';

class Post extends Component {
  render(){
    return(
      <div className='Post'>
        <li>
          <h3>{this.props.title}</h3>
          <div className='row'>
            <p className='difficulty col-xs-6'>Difficulty: {this.props.difficulty}</p>
            <p className='languages col-xs-6'>{this.props.languages}</p>
          </div>
          <p className="description">{this.props.description}</p>
          <p className='btn btn-blue'><a href={this.props.url} target='_break'>Take Project</a></p>
        </li>
      </div>
    )
  }
}

export default Post