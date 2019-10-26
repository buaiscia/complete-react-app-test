import React, { Component } from 'react';
import Person from './Person/Person';

// const persons = (props) => 

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) { 
    //     console.log('[Persons.js] getDerivedStateFromProps' );
    //     return state;
    // }


    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props );

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate' );
        return true;  // return condition, if true  continue updating  otherwise not
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map(( person, index) => {
            return  <Person 
            // <ErrorBoundary >   ---> not used here but to catch errors (see React docs), only used in components wehre we can expect errors (from users) adn not devs errors
                      click={() => this.props.clicked(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.props.changed(event, person.id)}
                      /> 
                      // </ErrorBoundary>
        
        }    );
    }
}




export default Persons;