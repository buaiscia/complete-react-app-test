import React, { Component, Fragment } from 'react';
import classes from './Person.module.css'
// import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary';


// const person = (props) => {

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Auxiliary>
             <div className={classes.Person}>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p key="i2">{this.props.children}</p>   
                {/* props.children is all that inside opening and closing tag of component              */}
                <input  key="i3"type="text" onChange={this.props.changed} value={this.props.name}></input>
             </div>
            </Auxiliary>
        )}
}
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }

    // }

    


export default Person;