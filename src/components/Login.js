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
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      console.log(error);
    })
  }

  logout(){
    fire.auth().signOut();
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
          <form className='col-md-6'>
            <div className='form-group'>
              <label>Email:</label>
              <input value={this.state.email} onChange={this.handleChange} type='email' name='email' className='form-control' placeholder='gilfoyle@piedpiper.com'/>
            </div>
            <div className='form-group'>
              <label>Password:</label>
              <input value={this.state.password} onChange={this.handleChange} type='password' name='password' className='form-control' placeholder='b3tt3rthanD1n35h' />
            </div>
            <button type='submit' className='btn btn-red' onClick={this.login}>Login</button>
            <button type='submit' className='btn btn-blue' onClick={this.signup}>Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
