import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import fire, { FirebaseContext } from './components/firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <FirebaseContext.Provider value={new fire()}>
    <App />
  </FirebaseContext.Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
