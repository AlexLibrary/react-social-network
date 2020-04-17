import React from "react";
import './style.scss'
import { NavLink } from "react-router-dom";
const S = 'Header';

const Header = (props) => {
  return (
    <div className={`${S}`}>
      <img src="./bg-header.jpg" alt="" />
      <div className="container">
        <div className={`${S}__login`}>
          {props.isAuth
            ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
    </div>
  )
}

export default Header;
