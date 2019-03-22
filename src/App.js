import React, { Component } from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import { withFirebase } from './components/firebase/index'
import './css/App.css';
import './css/bootstrap/css/bootstrap.min.css';
import ProjectBoard from './pages/ProjectBoard';
import AddProject from './pages/AddProject';
import Contact from './pages/Contact';
import Header from './components/Header';
import Login from './pages/Login';
import Nav from './components/Nav';
import SignUp from './pages/SignUp';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      authUser: null,
    };
  }

  componentDidMount(){
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({authUser})
        : this.setState({authUser: null});
    });
  }

  componentWillUnmount(){
    this.listener();
  }

  render() {
    return (
      <HashRouter>
        <div className='App container-fluid'>
          <Nav authUser={this.state.authUser}/>

          <div className='wrapper'>
            <Route exact path='/' component={Header}/>
            <Route path='/ProjectBoard' component={ProjectBoard} />
            <Route path='/addproject' component={AddProject} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
          </div>
          
          <footer className='row'>
            <div className='footer-social'>
              <a href="https://twitter.com/coltxp1"
                target="_blank"
                rel="noopener noreferrer">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/coltxp"
                target="_blank"
                rel="noopener noreferrer">
                <i class="fa fa-facebook-f"></i> 
              </a>
            </div>
            <p>Copyright &copy; 2019 ColtXP</p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default withFirebase(App);
