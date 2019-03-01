import React, { Component } from 'react';
import fire from '../config/fire'

class Login extends Component {
  constructor(props){
    super(props);
    this.login= this.login.bind(this);
    this.signup= this.signup.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.logout= this.logout.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      console.log(error);
    })

    fire.auth().onAuthStateChanged(user => {
      if(user){
        alert("You've successfully logged in!")
      } else {
        alert("Oops, something went wrong. Try again?")
      }
    })
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      console.log(error);
    })

    fire.auth().onAuthStateChanged(user => {
      if(user) {
        alert("You've successfully created an account! Welcome!")
      } else {
        alert("Oops, something went wrong. Try again?")
      }
    })
  }

  logout(){
    fire.auth().signOut(
      alert("You've successfully logged out.")
    );
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='Login container'>
        <h2>Login</h2>
        <div className='separator-red'></div>
        <div className='row'>
          <div className='col-md-12 messages'>
            <div id='successMsg' className='success-msg hidden'>You've logged in successfully</div>
            <div id='errMsg' className='error-msg hidden'>Uh oh, something went wrong. Try again?</div>
            <div id='logoutMsg' className='logout-msg hidden'>You have successfully logged out.</div>
          </div>

          <form className='col-md-4'>
            <div className='form-group'>
              <label>Email:</label>
              <input value={this.state.email} onChange={this.handleChange} type='email' name='email' className='form-control' placeholder='gilfoyle@piedpiper.com'/>
              <p className='login-subtext'><small>Your information will never be shared with anyone.</small></p>
            </div>
            <div className='form-group'>
              <label>Password:</label>
              <input value={this.state.password} onChange={this.handleChange} type='password' name='password' className='form-control' placeholder='b3tt3rthanD1n35h' />
              <p className='login-subtext'><small>The stronger the better.</small></p>
            </div>
            <button type='submit' className='btn btn-red' onClick={this.login}>Login</button>
            <button type='submit' className='btn btn-blue' onClick={this.signup}>Sign up</button>
            <button type='submit' className='btn log-out' onClick={this.logout}>Logout</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
