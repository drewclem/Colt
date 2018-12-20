import React, { Component } from 'react'
import '../css/Form.css'
import '../css/bootstrap/css/bootstrap.min.css'
import List from './List'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      email:{
        recipient: '',
        sender: '',
        subject:'',
        text:{
          title: '',
          difficulty: '',
          link: '',
          languages: '',
          description: ''
        }
      }
    }
  }

  //inputCheck = () => {
    //console.log(this.state.email.text)
  //}

  sendEmail = _ => {
    const email = this.state.email;

    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&subject=${email.subject}&text=${email.text}`)
      .catch(err => console.error(err));
  }

  render () {
    const { email } = this.state;

    return (
      <div>

        <List posts={this.state.posts} />

        <form className='form col-md-5' onChange={this.inputCheck}>
          <div className='row'>
            <div className='form-group col-xs-9'>
              <label>Project Title:</label>
              <input
                value= {email.text.title}
                onChange= {e => this.setState({
                  email: {text: {
                    ...this.state.email.text, title: e.target.value
                  }}
                })}
                className='form-control'
                placeholder='Please enter a name for the project'
                type='text'
              />
            </div>

            <div className='form-group col-xs-4'>
              <label>Difficulty Level:</label>
              <select
                value= {email.text.difficulty}
                type="select"
                onChange= {e => this.setState({
                  email: { text: {
                    ...this.state.email.text, difficulty: e.target.value
                  }}
                })}
                name='difficulty'
                className='form-control'
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
                value= {email.text.link}
                onChange= {e => this.setState({
                  email: { text: {
                      ...this.state.email.text, link: e.target.value
                    }
                  }
                })}
                type='text'                       
                className='form-control'
                placeholder='Link to github repo'
              />

            </div>

            <div className='form-group col-xs-6'>
              <label>Email:</label>
              <input
                value= {email.sender}
                onChange= {e => this.setState({email: {...email, sender: e.target.value} })}
                className='form-control'
                placeholder='Please enter a vaild email'
              />
            </div>

            <div className='form-group col-xs-6'>
                <label>Lanauges Used:</label>
                <input
                  value= {email.text.languages}
                  type="text"
                  onChange= {e => this.setState({
                    email: { text: {
                      ...this.state.email.text, languages: e.target.value
                    }}
                  })}
                  className="form-control"
                  placeholder='Programming Languages Used'
                />
            </div>

            <div className='form-group col-xs-12'>
              <label>Description:</label>
              <textarea
                value= {email.text.description}
                onChange= {e => this.setState({
                  email: {text: {
                    ...this.state.email.text, description: e.target.value
                  }}
                })}
                className='form-control'
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

      </div>
    )
  }
}

export default Form
