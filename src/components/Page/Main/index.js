import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Dialogs from "./Dialogs/Container";
// import Profile from "./Profile/Container";
// import Users from "./Users/Container";
// import Login from "./Login/Container";
import styles from './style.module.scss'
import { withSuspense } from "../../../hoc/withSuspense";

const Dialogs = React.lazy(() => import("./Dialogs/Container"))
const Profile = React.lazy(() => import("./Profile/Container"))
const Users = React.lazy(() => import("./Users/Container"))
const Login = React.lazy(() => import("./Login"))

const PageItems = () => {
  return (
    <div className={styles.main}>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/profile' />} />
        <Route path='/dialogs' render={withSuspense(Dialogs)} />
        <Route path='/profile/:userId?' render={withSuspense(Profile)} />
        <Route path='/users' render={withSuspense(() => <Users pageTitle={'Самураи'} />)} />
        <Route path='/login' render={withSuspense(Login)} />
        <Route path='*' render={() => <div>ERROR: 404</div>} />
      </Switch>
    </div>
  )
}

export default PageItems;
