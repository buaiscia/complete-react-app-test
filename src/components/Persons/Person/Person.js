import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css'
// import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';


// const person = (props) => {

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElRef = React.createRef();
    }


    componentDidMount() {
        // this.inputEl.focus();  // as mount after rendering it focus on the last loaded element
        this.inputElRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Auxiliary>
                {this.props.isAuth ? <p>Authenticated!</p> : <p>please log in</p>} 
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p key="i2">{this.props.children}</p>   
                {/* props.children is all that inside opening and closing tag of component              */}
                <input  
                    key="i3" 
                    // ref={(inputEl) => {this.inputEl = inputEl}}  //references, to point to objects
                    ref={this.inputElRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
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