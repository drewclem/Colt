import React, { Component } from 'react'
import '../css/bootstrap/css/bootstrap.min.css'
import '../css/List.css'
import Post from './Post'

// let posts = [
//   {
//     title: 'A Simple github issue',
//     difficulty: 'Easy',
//     description: 'This is a simple github issue that could easily be completed by an entry level programmer looking to gain experience.'
//   },
//   {
//     title: 'Fix my CSS',
//     difficulty: 'Intermediate',
//     description: 'My site looks horrible! I have no design background! Help me make it look pretty!'
//   }
// ]

class List extends Component {
  render () {
    const { posts } = this.props
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
          {posts.map((post, index) => {
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
