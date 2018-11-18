import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Colt
        </header>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
