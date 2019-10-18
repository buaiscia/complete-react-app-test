import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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



  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )

    // this.setState({
    //   persons: [
    //     {  name: 'Max', age: 28},
    //     {  name: event.target.value, age: 29},
    //     {  name: 'Babiu', age: 40}
    //   ]
      
    // })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow})
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
      // ':hover': {
      //     backgroundColor: 'lightgreen',
      //     color: 'black'
      // }
    // }

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, personIndex) => {
              return 
              // <ErrorBoundary >
                <Person 
                        click={() => this.deletePersonHandler(personIndex)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangeHandler(event, person.id)}
                        /> 
                        // </ErrorBoundary>
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
        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // }
        btnClass = classes.Red;
      
    }

    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses  = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1 ) {
      assignedClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I'm a create app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        
        {persons}
        
      </div>
      // </StyleRoot>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a create app'));
  }
}

export default App;
