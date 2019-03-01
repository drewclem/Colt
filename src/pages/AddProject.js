import React, { Component } from 'react';
import Form from '../components/Form';
import '../css/addproject.css';


class AddProject extends Component {
  render() {
    return (
      <div className='AddProject container'>
        <h2>Add Project</h2>
        <div className='separator-red'></div>
        <div className="row">
          <Form />
          <div className="your-role col-md-6">
            <h3>Your Role</h3>
            <div className='separator-red'></div>
            <p>
              As the senior developer, there are some expectations that you'll be available (within windows specified by you at the beginning of each project), maintain an encouraging and professional attitude, and generally just be a good person to the junior developer you're working with. It's important to have a thorough conversation before any work begins to determine the Colt's skill level and ability to complete the task. You are, in no way, required to work with everyone that requests your listing. If you feel there will be some personality or work ethic conflicts during the initial conversation, it is completely ok and expected for you to say 'I appreciate your interest, but I don't feel we'll be a good pair to work together,' or something to that effect.
            </p>
            <h3>Topics to Cover upfront</h3>
            <div className='separator-red'></div>
            <p>• Milestones and Goals of project</p>
            <p>• Timeline and due dates</p>
            <p>• Windows to pair program</p>
            <p>• Blackout dates <small>(travel, busy, etc...)</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
