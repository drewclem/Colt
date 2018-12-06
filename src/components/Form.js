import React, { Component } from 'react'
import '../css/Form.css'
import '../css/bootstrap/css/bootstrap.min.css'
import List from './List'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      email:{
        recipient: '',
        sender: '',
        subject:'',
        text:''
      }
    }
   // this.submitChange = this.submitChange.bind(this)
  }

  sendEmail = _ => {
    const email = this.state.email
    
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&subject=${email.subject}&text=${email.text}`)
      .catch(err => console.error(err));
    console.log(this.state.email)
  }

  //eventChange = _ => {
    //console.log(this.state.email)
  //}

  render () {
    const { email } = this.state;

    return (
      <div>
        <form className='form col-md-5'>
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
              <label>Recipient:</label>
              <input
                value= {email.recipient}
                onChange= {e => this.setState({email: {...email, recipient: e.target.value} })}
                type='text'
                ref='link'
                className='form-control'
                placeholder='Link to github repo'
              />

            </div>

            <div className='form-group col-xs-6'>
              <label>Sender:</label>
              <input
                value={email.sender}
                onChange= {e => this.setState({email: {...email, sender: e.target.value} })}
                ref='email'
                className='form-control'
                placeholder='Please enter a vaild email'
              />
            </div>

            <div className='form-group col-xs-6'>
                <label>Subject:</label>
                <input
                  type="text"
                  value= {email.subject}
                  onChange= {e => this.setState({email: {...email, subject: e.target.value} })}
                  ref="language"
                  className="form-control"
                  placeholder='Programming Languages Used'
                />
            </div>

            <div className='form-group col-xs-12'>
              <label>Text:</label>
              <textarea
                value= {email.text}
                onChange= {e => this.setState({email: {...email, text: e.target.value} })}
                className='form-control'
                ref='description'
                placeholder='Please provide a description of the project issue.'
                rows="8"
              />
            </div>

            <div className='form-group col-xs-3'>
              <button
                type='submit'
                value='submit'
                className='btn btn-danger form-control'
                onClick= {this.sendEmail}
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
