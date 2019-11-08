import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
// import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/withClass';
import Auxiliar from '../hoc/Auxiliary';

import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'ddd', name: 'Max', age: 28},
      { id: 'ccc', name: 'Manu', age: 29},
      { id: 'aaa', name: 'Babiu', age: 34}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps( props, state) {
    console.log('[App.js] derived state from props', props)
    return state;
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate' );
    return true;
     // return condition, if true  continue updating  otherwise not
}

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate' );

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1  //can't access state directly because it won't be sure if state is accurate, with the function and prevState sure it's the previous state to be modified
      }
    
    })

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

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {

      console.log('[App.js] render');
    // const style = {                      ------>inline styling before css modules
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
    // let btnClass = '';  --> gone into Cockpit component

    if(this.state.showPersons) {
      persons =  
               <Persons persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangeHandler} 
                      isAuthenticated={this.state.authenticated}
                />
            {/* {this.state.persons.map((person, personIndex) => {
              return 
              // <ErrorBoundary >
                <Person 
                        click={() => this.deletePersonHandler(personIndex)}                               --> before refactoring, person component in here
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangeHandler(event, person.id)}
                        /> 
                        // </ErrorBoundary>
            })} */}
                {/* <Person                                             ---> first step of giving manually values
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
          
      
        // style.backgroundColor = 'red';           --: before using css modules, instyle here
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // }
        
        // btnClass = classes.Red; --> gone into Cockpit component
      
    }

    // let classes = ['red', 'bold'].join(' ');
   

    return (
      // <StyleRoot>                    --> using Radium for styling
      <Auxiliar>
        <button 
          onClick={()=>{
            this.setState({showCockpit: false}
            )}}>Remove cockpit</button>
            <AuthContext.Provider value={{
                authenticated: this.state.authenticated,
                login: this.loginHandler
                }}>               
                {/* ref to context file which is used to pass props below withouth passing to intermediaries components */}
          {this.state.showCockpit ? (<Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler} 
                    login={this.loginHandler} />
            )   : null}
          
          {persons}
          </AuthContext.Provider>
      </Auxiliar>
      // </StyleRoot>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a create app'));
  }
}

export default withClass(App, classes.App);
