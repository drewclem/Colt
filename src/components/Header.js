import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <div className='Header row'>
        <div className='hero-wrapper'>
          <div className='container hero-copy'>
            <h1>Guided Open Source Projects</h1>
            <div className='separator'></div>
            <p className='desc'>Colt is a place where beginners looking to gain real-world experience can pair with seasoned developers to work through github issues on live projects. Gone are the days of submitting job resumes with no applicable experience under your belt!
            </p>
            <button className='btn btn-red'><Link to='/projectboard'>PAIR UP!</Link></button>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='About'>
              <div className="col-sm-5 about-wrapper">
                <h2>About</h2>
                <div className='separator-red'></div>
                <p>One of the definitions of a colt is a 'young or inexperienced person.' Historically, and still in some trades today, the only way to gain experience and graduate from being a 'colt' was to work with an already skilled tradesman. The mentor/apprentice relationship was and is important.</p>
                <p>One thing about the dev community that is truly inspirational, is the willingness of other developers to extend a helping hand to people who are passionate and determined to learn their craft. From this relationship between mentor and apprentice my goal became building a place for those eager to learn and those willing to teach, to meet.</p>
                <p>That was the birth of ColtXP. A place for new and aspiring developers to join forces with senior developers to work on live real-world applications! You will no longer have to turn in resumes with blank experience fields. Now you can link up with senior developers, or list a project as a senior developer, and build a true one-on-one learning experience in the world of open source!
</p>
              </div>
            </div>

            <div className='How'>
              <div className="col-sm-6 how-wrapper pull-right">
                <h2>How it Works</h2>
                <div className='how-separator'></div>
                <p><span>1. </span>Jump over the Project Board and find a listing that interests you.</p>
                <p><span>2. </span>Hit the 'Take Project' button and get in contact with the project owner. If it's still open you can begin working out the details of completing the task, and work through the task.</p>
                <p><span>3. </span>Work through the task with the senior developer. They'll be there for pairing sessions, answering questions, and guiding you through the project to completion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
