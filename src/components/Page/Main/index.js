import React from "react";
import { Route } from "react-router-dom";
// import Dialogs from "./Dialogs/Container";
// import Profile from "./Profile/Container";
// import Users from "./Users/Container";
// import Login from "./Login/Container";
import styles from './style.module.scss'
import { withSuspense } from "../../../hoc/withSuspense";

const Dialogs = React.lazy(() => import("./Dialogs/Container"))
const Profile = React.lazy(() => import("./Profile/Container"))
const Users = React.lazy(() => import("./Users/Container"))
const Login = React.lazy(() => import("./Login/Container"))

const PageItems = () => {
  return (
    <div className={styles.main}>
      <Route path='/dialogs' render={withSuspense(Dialogs)} />
      <Route path='/profile/:userId?' render={withSuspense(Profile)} />
      <Route path='/users' render={withSuspense(Users)} />
      <Route path='/login' render={withSuspense(Login)} />
    </div>
  )
}

export default PageItems;
