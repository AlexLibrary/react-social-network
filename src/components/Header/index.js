import React from "react";
import styles from './style.module.scss'
import { NavLink } from "react-router-dom";

const Header = (props) => {
  // if (!props.isAuth) return <Redirect to='/login' />
  return (
    <div className={styles.header}>
      <img src="./bg-header.jpg" alt="" />
      <div className="container">
        <div className={styles.header_login}>
          {props.isAuth
            ? <div>{props.login}<br /><button onClick={props.logout}>LOGOUT</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
    </div>
  )
}

export default Header;
