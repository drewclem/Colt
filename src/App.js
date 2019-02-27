import React, { Component } from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import './css/App.css';
import './css/bootstrap/css/bootstrap.min.css';
import ProjectBoard from './components/ProjectBoard';
import AddProject from './components/AddProject';
import Contact from './components/Contact';
import Header from './components/Header';
import Login from './components/Login';
import Nav from './components/Nav';
import fire from './config/fire';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      user: {},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      } else{
        this.setState({user: null});
      }
    });
  }

  render() {
    return (
      <HashRouter>
        <div className='App container-fluid'>
          <Nav />

          <div className='wrapper'>
            <Route exact path='/' component={Header}/>
            <Route path='/ProjectBoard' component={ProjectBoard} />
            <Route path='/addproject' component={AddProject} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
          </div>

          <footer className='row'>
            <p>Copyright &copy; 2019 ColtXP</p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
