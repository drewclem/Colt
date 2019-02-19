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
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='App container-fluid'>
          <Nav />

          <Route exact path='/' component={Header}/>
          <Route path='/ProjectBoard' component={ProjectBoard} />
          <Route path='/addproject' component={AddProject} />
          <Route path='/contact' component={Contact} />

          <footer className='row'>
            <p>Copyright &copy; 2019 ColtXP</p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
