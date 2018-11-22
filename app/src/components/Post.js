import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/List.css';

class Post extends Component {
    render(){
        return(
            <div>
                <li>
                    <h3>Test Name</h3>
                    <p className="difficulty">Easy</p>
                    <p>Here is a description that is a little longer than the last one just to see how a longer paragraph/sentence looks.</p>
                    <p className="btn btn-success btn-small">Take Project</p>
                </li>
            </div>
        )
    }
}

export default Post