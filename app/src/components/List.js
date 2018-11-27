import React, { Component } from 'react'
import '../css/bootstrap/css/bootstrap.min.css'
import '../css/List.css'
import Post from './Post'
import PostData from '../data/posts.json'

class List extends Component {
  render () {
    /*
        In order for your child component (List) to have access to your posts from the parent component
        (Form) you have to pass it down in the form of a prop.

        So here^ we destructure it, then map over it inside your UL.
    */
    /*
        Anytime you map over an array in React, you have to add a key prop.
        I went ahead an added it to your <Post /> and I also used the singular (post) instead of index
        so that it's easier to read for future developers who work on this.
    */
    return (
      <div className='list col-md-7'>
        <h2>Available Projects</h2>
        <ul>
          {PostData.map((post, index) => {
            return <Post
              key={index}
              title={post.title}
              difficulty={post.difficulty}
              description={post.description}
            />
          })}
        </ul>
      </div>
    )
  }
}

export default List
