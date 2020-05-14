import React from "react";
import styles from './Body.module.scss'
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { withSuspense } from "../../hoc/withSuspense";
import 'antd/es/empty/style/index.css';
import { Result, Button } from 'antd';
import 'antd/es/result/style/index.css';
import 'antd/es/button/style/index.css';
// import Dialogs from "./Dialogs/Container";
// import Profile from "./Profile/Container";
// import Users from "./Users/Container";
// import Login from "./Login/Container";

const Dialogs = React.lazy(() => import("./Dialogs/Container"))
const Profile = React.lazy(() => import("./Profile/Container"))
const Users = React.lazy(() => import("./Users/Container"))
const Login = React.lazy(() => import("./Login/Login"))

const Body = () => {
  return (
    <div className={styles.body}>
      <div className="container">
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/profile' />} />
          <Route path='/dialogs' render={withSuspense(() => <div className={styles.main}><Dialogs /></div>)} />
          <Route path='/profile/:userId?' render={withSuspense(Profile)} />
          <Route path='/users' render={withSuspense(() => <div className={styles.main}><Users pageTitle={'Пользователи'} /></div>)} />
          <Route path='/login' render={withSuspense(() => <div className={styles.main}><Login /></div>)} />
          <Route path='*' render={() => <div className={styles.main}>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary"><Link to={'/'}>Back Home</Link></Button>}
            />
          </div>} />
        </Switch>
      </div>
    </div>
  )
}

export default Body;
