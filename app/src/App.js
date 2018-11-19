import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form';
import List from './components/List';
import './css/bootstrap/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
