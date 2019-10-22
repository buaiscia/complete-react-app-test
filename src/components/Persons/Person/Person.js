import React, { Component } from 'react';
import classes from './Person.module.css'
// import Radium from 'radium';


// const person = (props) => {

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>  {/* props.children is all that inside opening and closing tag of component */}            
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }
}
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }

    // }

    


export default Person;