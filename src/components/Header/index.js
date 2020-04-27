import React from "react";
// import './style.scss'
import styles from './style.module.scss'
import { NavLink } from "react-router-dom";
// const S = 'header' {`${S}`}
import bg_header from '../../assets/img/bg-header.jpg'

const Header = (props) => {
  // if (!props.isAuth) return <Redirect to='/login' />
  return (
    <div className={styles.header}>
      <img src={bg_header} alt="" />
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
