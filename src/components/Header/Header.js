import React from "react";
import styles from './Header.module.scss'
import Navigation from './Navigation/Navigation'
import Login from './Login/Container'

const Header = () => {
  return (
    <div className={styles.inner}>
      <div className="container">
        <div className={styles.header}>
          <div></div> {/* get the app */}
          <div className={styles.logo}><h1>React.js</h1></div>
          <div className={styles.login}>
            <Login />
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  )
}

export default Header;
