import React, { Component } from 'react';
import styles from '../styles/Header.module.css'
const Header = () => {
    return ( 
        <header className={styles.Topbar}>
            <div className={styles.Logo}><img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" /></div>
            <div className={styles.Menu}>
                <div className={styles.TopLeft}>
                    <nav className={styles.LeftNav}>
                        <p className={styles.Active}>Home</p>
                        <p>TV shows</p>
                        <p>Movies</p>
                        <p>Latest</p>
                        <p>My List</p>
                    </nav> 
                </div>
                <div className={styles.TopRight}>
                    <nav className={styles.RightNav}>
                        <i className="fas fa-search"></i>
                        <p>CHILDREN</p>
                        <i className="fas fa-gift"></i>
                        <i className="fas fa-bell"></i>
                        <img src="https://i.pinimg.com/474x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg" alt="profile-pic" />
                        <i className="fas fa-caret-down"></i>
                    </nav>
                </div> 
            </div>   
        </header>
     );
}
 
export default Header;