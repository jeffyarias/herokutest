import React from 'react';
//import styles from  './NavBar';
import styles from './NavBar.module.css';




const NavBar = ()=> {

return (

<div class={styles.nav}>
  <input type="checkbox" id="nav-check"/>
  <div className={styles['nav-header']}>
    <div className={styles['nav-title']}>
      Boston Maids
    </div>
  </div>
  <div className={styles['nav-btn']}>
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className={`${styles['nav-links']} ${styles['nav-links']}`}>
    <a href="/" target="_blank">Book Now</a>
    <a href="/success" target="_blank"></a>
    <a href="/about" target="_blank">About Us</a>
    
  </div>
</div>



)

};


export default NavBar;


