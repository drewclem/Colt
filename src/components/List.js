import React, { Component } from 'react'
import Post from './Post'
import PostData from '../data/posts.json'

class List extends Component {
  render () {
    return (
      <div className='List row'>
        <div className="col-sm-8 board-list">
          <h2>Project Board</h2>
          <div className='separator-red'></div>
          <ul>
            {PostData.map((post, index) => {
              return <Post
                key={index}
                title={post.title}
                difficulty={post.difficulty}
                description={post.description}
                url={post.url}
                languages={post.languages}
              />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default List
