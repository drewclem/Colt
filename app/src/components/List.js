import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/List.css';
import Post from './Post'

let posts = [
    {
        title: "A Simple github issue",
        difficulty: "Easy",
        description: "This is a simple github issue that could easily be completed by an entry level programmer looking to gain experience."
    },
    {
        title: "Fix my CSS",
        difficulty: "Intermediate",
        description: "My site looks horrible! I have no design background! Help me make it look pretty!"
    },
]

class List extends Component {
    render(){
        return(
            <div className="list col-md-7" posts={posts}>
                <h2>Available Projects</h2>
                <ul>
                    {posts.map((index) => { return <Post 
                        title={index.title}
                        difficulty={index.difficulty}
                        description={index.description}
                    />; })}
                </ul>
            </div>
        )
    }
}

export default List