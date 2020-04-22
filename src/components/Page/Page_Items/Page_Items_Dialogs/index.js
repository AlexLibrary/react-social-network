import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss'
import PageItemsDialogsForm from "./Page_Items_Dialogs_Form"
const S = 'Page_Items_Dialogs';

const Page_Items_Dialogs = (props) => {

  const friendsElement = props.dialogPage.friends.map(obj =>
    <NavLink to={`/dialogs/${obj.id}`} key={obj.id}>{obj.name}</NavLink>
  )
  const messagesElement = props.dialogPage.input.messages.map(obj =>
    <div key={obj.id}>{obj.message}</div>
  )

  const addNewMessage = (values) => {
    props.sendMessage(values.textarea);
  }

  return (
    <div className={`${S}`}>
      <h1>Dialogs</h1>
      <div className={`${S}__wrapper`}>
        <div className={`${S}__wrapper__friends`}>
          {friendsElement}
        </div>
        <div className={`${S}__wrapper__messages`}>
          {messagesElement}
          <PageItemsDialogsForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

export default Page_Items_Dialogs;
