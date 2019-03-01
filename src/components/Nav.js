import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/App.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import fire from '../config/fire'

class Nav extends Component {
  constructor (props) {
  super(props);
  this.toggleClass = this.toggleClass.bind(this);
  this.logout= this.logout.bind(this);
  this.state = {
    active: false
  }
}

  logout(){
    fire.auth().signOut();
  }

  toggleClass () {
    const currentstate = this.state.active
    this.setState({active: !currentstate})
  }

    render(){

        return(
          <div className='row'>
            <nav className='Nav col-xs-12'>
              <Link to='/' className='nav-logo'>ColtXP</Link>
              <ul className={this.state.active ? 'main-menu nav-toggle' : 'main-menu'}>
                <li className='pb-nav'>
                    <NavLink to='/projectboard'>Project Board</NavLink>
                </li>
                <li className='ap-nav'>
                    <NavLink to='/addproject'>Add a Project</NavLink>
                </li>
                <li className='contact-nav'>
                    <NavLink to='/contact'>Contact Colt</NavLink>
                </li>
              </ul>
              <button>
                <FontAwesomeIcon 
                  icon= {faBars} 
                  className='hidden-sm hidden-md hidden-lg hidden-xl pull-right'
                  onClick= {this.toggleClass}
                />
              </button>

              <Link to='/login' className='nav-login'>Login</Link>
            </nav>
          </div>
        )
    }
}

export default Nav;