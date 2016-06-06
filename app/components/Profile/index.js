/**
*
* Profile
*
*/

import React from 'react';
import Navigation from '../Navigation/index.js';

import styles from './styles.css';

function Profile() {
  return (
    <div>
        <div className={styles.profile}>
            <Navigation />
            <div className={styles.header}>
                <img className={styles.avatar} src="https://pbs.twimg.com/profile_images/664040230215880704/5unW12Pg.jpg" />
                <h1>Oliver Stenkilde</h1>
                <h3>21 - 29/08/1994</h3>
            </div>
            <div className={styles.content}></div>
            <div className={styles.footer}></div>
        </div>
        <div className={ styles.list }>
            <p>Navn:</p>
            <p>Email:</p>
            <p>CPR:</p>
            <p>Adresse:</p>
            <p>Telefon:</p>
        </div>
    </div>
  );
}

export default Profile;
