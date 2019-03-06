import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { withFirebase } from '../components/firebase/index'
import { withRouter } from 'react-router-dom'

const LoginPage = () => (
  <div className="signInPage container">
    <h2>Log In</h2>
        <div className='separator-red'></div>
        <div className='row'>
          <LoginForm />
        </div>
  </div>
)

const INITIAL_STATE ={
  email: '',
  password: '',
  error: null,
}

class LoginFormBase extends Component {
  constructor(props){
    super(props);
    this.handleChange= this.handleChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
    this.state = {
      ...INITIAL_STATE
    }
  }

  onSubmit(e) {
    e.preventDefault();
    
    const { email, password } = this.state;

    this.props.firebase
      .signInWithEmailandPassword(email, password)
      .then(() =>{
        this.setState({...INITIAL_STATE});
        this.props.history.push('/projectboard');
        console.log('Login Successful!');
      })
      .catch(error => {
        this.setState({error});
      })
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {email, password, error } = this.state;

    const isInvalid = password === '' || email === '';
    return (
      <div className='LoginFormBase'>
        <form className='col-md-4' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Email:</label>
            <input
              value={email}
              onChange={this.handleChange}
              type='email' name='email'
              className='form-control'
              placeholder='gilfoyle@piedpiper.com'
            />
            <p className='login-subtext'><small>Your information will never be shared with anyone.</small></p>
          </div>

          <div className='form-group'>
            <label>Password:</label>
            <input
              value={password}
              onChange={this.handleChange}
              type='password'
              name='password'
              className='form-control'
              placeholder='b3tt3rthanD1n35h'
            />
            <p className='login-subtext'><small>The stronger the better.</small></p>
          </div>

          <button
            type='submit'
            className='btn btn-red bottom-20'
            disabled={isInvalid}
          >Login
          </button>

          {error && <p>{error.message}</p>}
          <p>Don't have an account?<Link to='/signup'> Sign Up</Link> here.</p>

        </form>
      </div>
    );
  }
}

const LoginForm = withRouter(withFirebase(LoginFormBase));

export default LoginPage;
export { LoginForm };
