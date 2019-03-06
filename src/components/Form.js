import React, { Component } from 'react';

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

  sendEmail = _ => {
    const email = this.state.email;

    fetch(`https://coltxp-backend.herokuapp.com/send-email?recipient=${email.recipient}&sender=${email.sender}&subject=${email.subject}&text=${email.text.title}\n\n${email.text.difficulty}\n\n${email.text.languages}\n\n${email.text.description}\n\n${email.text.link}`)
      .catch(err => console.error(err.response));
  }

  render () {
    const { email } = this.state;

    return (
      <div>

        <form className='Form col-md-6' name='project-submission' method='POST' data-netlify='true' netlify-honeypot='bot-field' onChange={this.inputCheck}>
          <input type='hidden' name='form-name' value='project-submission'/>
          <div className='row'>
            <div className='form-group col-xs-12 col-md-9'>
              <label>Project Title:</label>
              <input
                value= {email.text.title}
                onChange= {e => this.setState({
                  email: {text: {
                    ...this.state.email.text, title: e.target.value
                  }}
                })}
                className='form-control'
                placeholder='Adding compression algorithm'
                type='text'
                name='projectTitle'
              />
            </div>

            <div className='form-group col-xs-12 col-md-6'>
              <label>Difficulty Level:</label>
              <select className='form-control' name='difficulty'>
                <option value='beginner' selected>Beginner</option>
                <option value='intermediate'>Intermediate</option>
                <option value='hard'>Hard</option>
              </select>
            </div>

            <div className='form-group col-xs-12 col-md-6'>
                <label>Languages Used:</label>
                <input
                  value= {email.text.languages}
                  type="text"
                  onChange= {e => this.setState({
                    email: { text: {
                      ...this.state.email.text, languages: e.target.value
                    }}
                  })}
                  className="form-control"
                  placeholder='HTML, PHP, JS, etc...'
                  name='languages'
                />
            </div>

            <div className='form-group col-xs-12'>
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
                placeholder='https://github.com/piedpiper'
                name='link'
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
                placeholder='Please provide a description of the project.'
                rows="8"
                name='description'
              ></textarea>
            </div>

            <div className='form-group col-xs-12 col-md-10'>
              <label>Email:</label>
              <input
                value= {email.sender}
                onChange= {e => this.setState({email: {...email, sender: e.target.value} })}
                className='form-control'
                placeholder='richard@piedpiper.com'
                name='sender'
              />
            </div>

            <div className='form-group col-xs-3'>
              <button
                type='submit'
                value='submit'
                className='btn btn-red'
                //onClick= {this.sendEmail}
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
