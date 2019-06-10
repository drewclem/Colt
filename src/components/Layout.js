import React, { Component } from 'react';
import Nav from './Nav'

class Layout extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
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
    )
  }
}

export default Layout