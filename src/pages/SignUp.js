import React, { Component } from 'react';
import { withFirebase } from '../components/firebase/index'
import { withRouter } from 'react-router-dom'

const SignUpPage = () => (
  <div className="signUpPage container">
    <h2>Sign Up</h2>
        <div className='separator-red'></div>
        <div className='row'>
        <SignUpForm />
        </div>
  </div>
);

const INITIAL_STATE ={
  name: '',
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpFormBase extends Component {
  constructor(props){
    super(props);
    this.handleChange= this.handleChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
    this.state = {
      ...INITIAL_STATE
    }
  }

  onSubmit(e){
    e.preventDefault();

    const {username, email, passwordOne, name } = this.state;

    this.props.firebase
      .createUserWithEmailandPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase.user(authUser.user.uid).set(
          {
            username,
            name,
            email
          },
          {merge: true},
        )
      })
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push('/projectboard')
      })
      .catch(error => {
        this.setState({error});
      })
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      name,
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid = 
    this.state.username ==='' ||
    this.state.passwordOne !== this.state.passwordTwo ||
    this.state.passwordOne === '' ||
    this.state.email ==='';

    return (
      <div className='SignUpForm'>
            <form className='col-md-4' onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label>Name:</label>
                <input
                  value={name}
                  onChange={this.handleChange}
                  type='text'
                  name='name'
                  className='form-control'
                  placeholder='Dinesh Chugtai'
                />
              </div>

              <div className='form-group'>
                <label>Username:</label>
                <input
                  value={username}
                  onChange={this.handleChange}
                  type='text'
                  name='username'
                  className='form-control'
                  placeholder='dineshCTO'
                />
              </div>

              <div className='form-group'>
                <label>Email:</label>
                <input
                  value={email}
                  onChange={this.handleChange}
                  type='email'
                  name='email'
                  className='form-control'
                  placeholder='dinesh@piedpiper.com'
                />
                <p className='login-subtext'><small>Your information will never be shared with anyone.</small></p>
              </div>

              <div className='form-group'>
                <label>Password:</label>
                <input
                  value={passwordOne}
                  onChange={this.handleChange}
                  type='password'
                  name='passwordOne'
                  className='form-control'
                  placeholder='g1lf0yl35uck5'
                />
                <p className='login-subtext'><small>The stronger the better.</small></p>
              </div>

              <div className='form-group'>
                <label>Confirm Password:</label>
                <input
                  value={passwordTwo}
                  onChange={this.handleChange}
                  type='password'
                  name='passwordTwo'
                  className='form-control bottom-20'
                  placeholder='g1lf0yl35uck5'
                />
              </div>

              <button
                type='submit'
                className='btn btn-red'
                disabled={isInvalid}
              >Sign Up
              </button>
              
              {error && <p>{error.message}</p>}

            </form>
      </div>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm }
