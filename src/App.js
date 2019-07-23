import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({    
      persons: [
        { name: 'Max', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Babiu', age: 34}
      ]
    });

    console.log(personsState);

    const switchNameHandler = () => {
      // this.state.persons[0] = 'Maximilian';  // DON'T DO THIS
      setPersonsState({
        persons: [
          { name: 'Maximilian', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Babiu', age: 40}
        ]
        });
      }
  

    return (
      <div className="App">
        <h1>Hi, I'm a create app</h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: racing </Person> 
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a create app'));
  
}


export default App;

