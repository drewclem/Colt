import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  render() {
    return (
      <div className='Contact container'>
        <h2>Contact</h2>
        <div className='separator-red'></div>
        <div className='row'>
          <form className='col-sm-5'>
            <div className='form-group'>
                <label>Name:</label>
                <input className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Comment:</label>
                <textarea className='form-control'/>
            </div>
            <button type='submit' 
                    className='btn btn-red'>Submit</button>
          </form>

          <div className="your-role col-md-6">
            <h3>Feedback, Suggestions, Comments</h3>
            <div className='separator-red'></div>
            
            <p>
              I want to make Colt the absolute <strong>best</strong> that it can be. If you have any feedback or input that you feel will improve the user experience please do not hesitate to send it over! See a bug happening? Send it over! Want to contribute to Colt? While I do want to maintain being the main contributor to Colt, I am absolutely open to allowing others to help build Colt with me!
            </p>
            <p>
              ColtXP started as a small project to learn building in React, but the more I built it the more invested I became in its core mission. I am no expert React developer and in fact, this is my first React app, so please keep this in mind when sending any feedback, suggeestions, or comments.
            </p>

            <a href="https://github.com/drewclem/Colt" target="_blank">
              <FontAwesomeIcon icon={faCodeBranch} className='gh-link'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
