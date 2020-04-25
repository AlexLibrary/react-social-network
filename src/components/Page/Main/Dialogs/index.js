import React from "react";
import { NavLink } from "react-router-dom";
import styles from './style.module.scss'
import Form from "./Form"

const Dialogs = (props) => {

  const friendsElement = props.dialogPage.friends.map(obj =>
    <NavLink activeClassName={styles.a_active} to={`/dialogs/${obj.id}`} key={obj.id}>{obj.name}</NavLink>
  )
  const messagesElement = props.dialogPage.input.messages.map(obj =>
    <div key={obj.id}>{obj.message}</div>
  )

  const addNewMessage = (values) => {
    props.sendMessage(values.textarea);
  }

  return (
    <div className={styles.dialogs}>
      <h1>Dialogs</h1>
      <div className={styles.dialogs_wrapper}>
        <div className={styles.dialogs_wrapper_friends}>
          {friendsElement}
        </div>
        <div>
          {messagesElement}
          <Form onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
