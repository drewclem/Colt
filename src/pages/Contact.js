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
          <form className='col-md-6' name='feedback' method='post' data-netlify='true' netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='feedback'/>
            <div className='form-group'>
              <label>Name:</label>
              <input
                className='form-control'
                name='name'
                placeholder='Richard Hendricks'/>
            </div>
            <div className='form-group'>
              <label>Email:</label>
              <input
                className='form-control'
                name='email'
                placeholder='richard@piedpiper.com'/>
            </div>
            <div className='form-group'>
              <label>Comment:</label>
              <textarea
                className='form-control'
                rows='4' name='comment'
                placeholder='Jared still speaks german in his sleep and Dinesh wont stop talking about his Tesla. Gilfoyle still hasnt turned off his bitcoin notification'/>
            </div>
            <button type='submit' className='btn btn-red'>Submit</button>
          </form>

          <div className="your-role col-md-6">
            <h3>Feedback, Suggestions, Comments</h3>
            <div className='separator-red'></div>
            
            <p>
              I want to make Colt the absolute <strong>best</strong> that it can be. If you have any feedback or input that you feel will improve the user experience please do not hesitate to send it over! See a bug happening? Send it over! Want to contribute to Colt? While I do want to maintain being the main contributor to Colt, I am absolutely open to allowing others to help build Colt with me!
            </p>
            <p>
              ColtXP started as a small project to learn building in React, but the more I built it the more invested I became in its core mission. I am no expert React developer and in fact, this is my first React app, so please keep this in mind when sending any feedback, suggestions, or comments.
            </p>

            <a href="https://github.com/drewclem/Colt" target="_blank" rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faCodeBranch} className='gh-link'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
