import React from "react";
// import './style.scss'
import styles from './style.module.scss'
import { NavLink, Link } from "react-router-dom";
import { Avatar } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const Login = (props) => {
  // if (!props.isAuth) return <Redirect to='/login' />
  if (props.isAuth && props.profile) {
    return (
      <div className={styles.sign}>
        <div className={styles.logout}>
          <Link to='/profile'>
            <Avatar src={props.profile.photos.small} />
            {props.login}
          </Link>
          <a href='##' onClick={props.logout}>
            <LogoutOutlined />
          </a>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.sign}>
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    )
  }
}

export default Login;
