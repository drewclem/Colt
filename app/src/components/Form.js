import React, { Component } from 'react'
import '../css/Form.css'
import '../css/bootstrap/css/bootstrap.min.css'
import List from './List'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      /*
        You're not passing any props to Form inside App.js
        so I'm changing this to an empty array because props.posts isn't defined.
      */
      posts: []
    }

    this.submitChange = this.submitChange.bind(this)
  }

  submitChange (event) {
    event.preventDefault()
    // Create a new post based off form values.
    const post = {
      title: this.refs.title.value,
      difficulty: this.refs.difficulty.value,
      description: this.refs.description.value
    }
    // Concat so it creates a new aarray and adds element
    const updatedPosts = this.state.posts.concat(post)
    // Update state
    this.setState({
      posts: updatedPosts
    })
  }

  render () {
    return (
      <div>
        <form className='form col-md-5' onSubmit={this.submitChange}>
          <div className='row'>
            <div className='form-group col-xs-9'>
              <label>Project Title:</label>
              <input
                name='title'
                className='form-control'
                placeholder='Please enter a name for the project'
                type='text'
                ref='title'
              />
            </div>

            <div className='form-group col-xs-4'>
              <label>Difficulty Level:</label>
              {/*
                Since you're using 'uncontrolled' values, you want to use defaultValue to
                set the initial value, which is what I added to your select input.

                Ref: https://reactjs.org/docs/uncontrolled-components.html#default-values
                */}
              <select
                name='difficulty'
                className='form-control'
                ref='difficulty'
                defaultValue='Select a difficulty'
              >
                <option disabled value='Select a difficulty'>Select a difficulty</option>
                <option value='Easy'>Easy</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Hard'>Hard</option>
              </select>
            </div>

            <div className='form-group col-xs-8'>
              <label>Github Link:</label>
              <input
                name='link'
                type='text'
                ref='link'
                className='form-control'
                placeholder='Link to github repo'
              />

            </div>

            <div className='form-group col-xs-6'>
              <label>Email:</label>
              <input
                name='email'
                type='email'
                ref='email'
                className='form-control'
                placeholder='Please enter a vaild email'
              />
            </div>

            <div className='form-group col-xs-12'>
              <label>Issue Description:</label>
              <textarea
                name='description'
                className='form-control'
                ref='description'
                placeholder='Please provide a short description of the project issue.'
              />
            </div>

            <div className='form-group col-xs-3'>
              <button
                type='submit'
                value='Submit'
                className='btn btn-danger form-control'
              >Submit
              </button>
            </div>
          </div>
        </form>

        <List posts={this.state.posts} />

      </div>
    )
  }
}

export default Form
