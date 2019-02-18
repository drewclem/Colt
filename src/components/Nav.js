import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const currentstate = this.state.active;
    this.setState({active: !currentstate});
  };

    render(){
        return(
          <div className='row'>
            <nav className='Nav col-xs-12'>
              <Link to='/' className='nav-logo'>ColtXP</Link>
              <ul className={this.state.active ? 'main-menu nav-toggle' : 'main-menu'}>
                <li>
                    <Link to='/projectboard'>Project Board</Link>
                </li>
                <li>
                    <Link to='/addproject'>Add a Project</Link>
                </li>
                <li>
                    <Link to='/contact' >Contact Colt</Link>
                </li>
              </ul>
              <button>
                <FontAwesomeIcon 
                  icon= {faBars} 
                  className='hidden-sm hidden-md hidden-lg hidden-xl pull-right'
                  onClick= {this.toggleClass}
                />
              </button>
            </nav>
          </div>
        )
    }
}

export default Nav;