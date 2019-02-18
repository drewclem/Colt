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
            <p className='desc'>Colt is a place where beginners looking to gain real-world experience can pair with experienced programmers to work through github issues on live projects. Gone are the days of submitting job resumes with no applicable experience under your belt!
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
                <p>One of the definitions of a colt is a 'young or inexperienced person.' Back in the day, and even still in some trades today, the only way to gain experience and graduate from being a 'colt' was to work with an already skilled tradesman. The mentor/apprentice relationship was an important one.</p>
                <p>One thing that has always kept me in awe of the dev community is the willingness of other developers to extend a helping hand to those truly passionate and determined to learn the craft. So I asked myself, why not build a place for those eager to learn and those willing to teach to meet?</p>
                <p>Enter, ColtXP. A place for young/new/aspiring developers to join forces with senior developers to work on live real-world applications! Gone are the days of turning in resumes with blank experience fields. Link up with senior developers, or list a project as a senior developer, and build a true one-on-one learning experience in the world of open source!</p>
              </div>
            </div>

            <div className='How'>
              <div className="col-sm-6 how-wrapper pull-right">
                <h2>How it Works</h2>
                <div className='how-separator'></div>
                <p><span>1. </span>Jump over the Project Board and find a listing that interests you.</p>
                <p><span>2. </span>Smash the 'Take Project' button and get in contact with the project owner. If it's still open you can begin working out the details of completing the task.</p>
                <p><span>3. </span>Work through the task with the senior developer! They'll be there for pairing sessions, answering questions, and guiding you through the project to completion!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
