/*
*
* Login
*
*/

import React from 'react';
import { connect } from 'react-redux';
import selectLogin from './selectors';
import styles from './styles.css';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className={ styles.login }>
                <form className={ styles.form }>
                    <a href="/profile">Skip login for now</a>
                    <input className={ styles.input } type="text" placeholder="email"/>
                    <input className={ styles.input } type="text" placeholder="password"/>
                    <input className={ styles.button } type="submit" value="Login"/>
                    <span className={ styles.button }><a href="#">Register</a></span>
                </form>
            </div>
        );
    }
}

const mapStateToProps = selectLogin();

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
