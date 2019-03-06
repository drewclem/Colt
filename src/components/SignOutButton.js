import React from 'react'

import { withFirebase } from './firebase/index'

const SignOutButton = ({ firebase }) => (

  <button className='log-out' type="button" onClick={firebase.signOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);