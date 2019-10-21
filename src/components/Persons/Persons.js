import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map(( person, index) => {
    console.log('[Persons.js] rendering...')
    return  <Person 
    // <ErrorBoundary >   ---> not used here but to catch errors (see React docs), only used in components wehre we can expect errors (from users) adn not devs errors
              click={() => props.clicked(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => props.changed(event, person.id)}
              /> 
              // </ErrorBoundary>

}    );


export default persons;