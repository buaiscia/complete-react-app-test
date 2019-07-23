import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Babiu', age: 34}
    ]
  }

  switchNameHandler = () => {
      // this.state.persons[0] = 'Maximilian';  // DON'T DO THIS
      this.setState({
        persons: [
          { name: 'Maximilian', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Babiu', age: 40}
        ]
        
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a create app</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: racing </Person> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a create app'));
  }
}

export default App;
