import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/List.css';
import Post from './Post'


class List extends Component {
    render(){
        return(
            <div className="list col-md-7">
                <h2>Available Projects</h2>
                <ul>
                    <Post />
                </ul>
            </div>
        )
    }
}

export default List