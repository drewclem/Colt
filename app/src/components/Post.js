import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/List.css';

class Post extends Component {
    render(){
        return(
            <div>
                <li>
                    <h3>{this.props.title}</h3>
                    <p className="difficulty">{this.props.difficulty}</p>
                    <p>{this.props.description}</p>
                    <p className="btn btn-success btn-small">Take Project</p>
                </li>
            </div>
        )
    }
}

export default Post