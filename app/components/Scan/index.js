/**
*
* Scan
*
*/

import React from 'react';

import styles from './styles.css';

function Scan() {
  return (
    <div className={ styles.scan }>
        <h1>Scan this guy and enter the club</h1>
        <img className={ styles.code } src="http://i.imgur.com/GcwTOIF.png" alt=""/>
    </div>
  );
}

export default Scan;
