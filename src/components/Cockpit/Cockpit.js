import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = props => {

    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext)

    console.log(authContext.authenticated)

    useEffect(() => {
        console.log('[cockpit.js] useEffect');

        // const timer = 
        // setTimeout(() => {
        //     alert('Saved data')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[cockpit.js] cleanup of useeffect')
        }
    
    }, [] ); // [props.persons] adding props so that component expects to be called when the props changed / if emptu array [] tells React to run it only on first time as no dependencies / if no argument it updates every cycle/render  
 
    useEffect(() => {
        console.log('[cockpit.js] 2nd useEffect');
        return () => {
            console.log('[cockpit.js] cleanup of 2nd usEffect')
        }
    })

    const assignedClasses  = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }


    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <=1 ) {
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle persons
            </button>
            {/* <AuthContext.Consumer> */}
            <button
                onClick={authContext.login}>
                Login
            </button>
            {/* </AuthContext.Consumer> */}
        </div>
        

    );
}

export default React.memo(Cockpit);