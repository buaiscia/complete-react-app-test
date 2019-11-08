import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css'
// import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';


// const person = (props) => {

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Auxiliary>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p key="i2">{this.props.children}</p>   
                {/* props.children is all that inside opening and closing tag of component              */}
                <input  key="i3"type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Auxiliary>
        )}
}
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }

    // }

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}


export default withClass(Person, classes.Person);