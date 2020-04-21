import React from "react";
import './style.scss'
import { NavLink } from "react-router-dom";
const S = 'Header';

const Header = (props) => {
  const handleLogout = () => {
    props.logout()
  }
  return (
    <div className={`${S}`}>
      <img src="./bg-header.jpg" alt="" />
      <div className="container">
        <div className={`${S}__login`}>
          {props.isAuth
            ? <div>{props.login}<span onClick={handleLogout}>LOGOUT</span></div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
    </div>
  )
}

export default Header;
