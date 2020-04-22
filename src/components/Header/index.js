import React from "react";
import './style.scss'
import { NavLink, Redirect } from "react-router-dom";
const S = 'Header';

const Header = (props) => {
  // if (!props.isAuth) return <Redirect to='/login' />
  return (
    <div className={`${S}`}>
      <img src="./bg-header.jpg" alt="" />
      <div className="container">
        <div className={`${S}__login`}>
          {props.isAuth
            ? <div>{props.login}<button onClick={props.logout}>LOGOUT</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
    </div>
  )
}

export default Header;
