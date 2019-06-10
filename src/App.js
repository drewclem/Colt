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
import SignUp from './pages/SignUp';
import ContactThanks from './pages/ContactThanks'
import ListingThanks from './pages/ListingThanks'
import Layout from './components/Layout'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      authUser: null,
    };
  }

  // componentDidMount(){
  //   this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
  //     authUser
  //       ? this.setState({authUser})
  //       : this.setState({authUser: null});
  //   });
  // }

  // componentWillUnmount(){
  //   this.listener();
  // }

  render() {
    return (
      <HashRouter>
        <div className='App container-fluid'>
          <Layout>
            <div className='wrapper'>
              <Route exact path='/' component={Header}/>
              <Route path='/ProjectBoard' component={ProjectBoard} />
              <Route path='/addproject' component={AddProject} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/contactthanks' component={ContactThanks} />
              <Route path='/listingthanks' component={ListingThanks} />
            </div>
          </Layout>
        </div>
      </HashRouter>
    );
  }
}

export default withFirebase(App);
