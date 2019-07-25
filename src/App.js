import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'ddd', name: 'Max', age: 28},
      { id: 'ccc', name: 'Manu', age: 29},
      { id: 'aaa', name: 'Babiu', age: 34}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //     // this.state.persons[0] = 'Maximilian';  // DON'T DO THIS
  //     this.setState({
  //       persons: [
  //         { name: newName, age: 28},
  //         { name: 'Manu', age: 29},
  //         { name: 'Babiu', age: 40}
  //       ]
        
  //     })
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }



  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {  name: 'Max', age: 28},
        {  name: event.target.value, age: 29},
        {  name: 'Babiu', age: 40}
      ]
      
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, personIndex) => {
              return <Person 
                        click={() => this.deletePersonHandler(personIndex)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        />
            })}
                {/* <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'MaximiliMaxan')}
                  changed={this.nameChangeHandler}> My hobbies: racing </Person> 
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />       */}
          </div> 
      )
        
      
    }

    return (
      <div className="App">
        <h1>Hi, I'm a create app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
        
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a create app'));
  }
}

export default App;
