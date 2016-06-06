/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';

function Navigation() {
  return (
    <div>
        <nav className={ styles.navigation }>
            <a href="/profile">Profile</a>
            <a href="/scan" className={ styles.grow }>Scan</a>
            <a href="/login">Logout</a>
        </nav>
    </div>
  );
}

export default Navigation;
