import React from 'react';
import classes from './Person.module.css'
// import Radium from 'radium';

const person = (props) => {
    console.log('[Person.js] rendering...')
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }

    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>  {/* props.children is all that inside opening and closing tag of component */}            
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;