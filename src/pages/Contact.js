import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

          <div className="col-md-6">
            <div className='your-role'>
              <h3>Feedback, Suggestions, Comments</h3>
              <div className='separator-red'></div>
              
              <p>
                I want to make ColtXP the absolute <strong>best</strong> that it can be. If you have any feedback or input that you feel will improve the user experience please do not hesitate to send it over! See a bug happening? Send it over! Want to contribute to ColtXP? I am absolutely open to allowing others to help build ColtXP with me.
              </p>
              <p>
              ColtXP started as a small project to learn building in React, but the more I built it the more invested I became in its core mission. I am not an expert React developer and in fact, this is my first React app, so please keep this in mind when sending any feedback, suggestions, or comments.
              </p>

              <a href="https://github.com/drewclem/Colt" target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faCodeBranch} className='gh-link'/>
              </a>
            </div>

            <div className="contributions">
              <h4>Contributing to <strong>ColtXP</strong></h4>
              <div className='separator-red'></div>

              <p>
                Our core mission is to connect junior and senior developers in a mentoring and mutually beneficial partnership. If you truly believe in ColtXP's mission then considering contributing in some of the ways listed below. There are no small contributions here. A helpful comment is appreciated just as much as helping solve a bug in the code and a small css change is just as appreciated as helping build a feature. 
              </p>
              <ul>
                <li>Contribute to the code base</li>
                <li>Send comments and feedback on ways we can improve</li>
                <li>Donate or subscribe to our <a href="https://www.patreon.com/coltxp">Patreon</a></li>
                <li><Link to='/signup'>Create an Account</Link> and join our Alpha Testing Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
