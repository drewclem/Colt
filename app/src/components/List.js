import React, { Component } from 'react'
import '../css/bootstrap/css/bootstrap.min.css'
import '../css/List.css'
import Post from './Post'
import PostData from '../data/posts.json'

class List extends Component {
  render () {
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
