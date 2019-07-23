import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a create app</h1>
        <Person name="Max" age="28" />
        <Person name="Manu" age="30"> My hobbies: racing </Person> 
        <Person name="Babiu" age="34" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a create app'));
  }
}

export default App;
