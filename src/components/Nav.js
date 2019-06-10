import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/App.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SignOutButton from './SignOutButton'
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  constructor (props) {
  super(props);
  this.toggleClass = this.toggleClass.bind(this);
  this.state = {
    active: false
  }
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
              <button className="toggle-dropdown">
                <FontAwesomeIcon 
                  icon= {faBars} 
                  className='hidden-sm hidden-md hidden-lg hidden-xl pull-right'
                  onClick= {this.toggleClass}
                />
              </button>

              <div className="quicklinks">
                <ul>
                  <li>
                    {/* <SignOutButton /> */}
                  </li>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                </ul>
              </div>
              
            </nav>
          </div>
        )
    }
}

export default Nav;