import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import './style.scss'
const S = 'Page_Items_Dialogs';

const Page_Items_Dialogs = (props) => {

  const friendsElement = props.dialogPage.friends.map(obj =>
    <NavLink to={`/dialogs/${obj.id}`} key={obj.id}>{obj.name}</NavLink>
  )
  const messagesElement = props.dialogPage.input.messages.map(obj =>
    <div key={obj.id}>{obj.message}</div>
  )

  const handleClick = () => {
    props.sendMessage();
  }

  const handleChange = e => {
    const textareaValue = e.target.value;
    props.updateInputMessage(textareaValue)
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={`${S}`}>
      <h1>Dialogs</h1>
      <div className={`${S}__wrapper`}>
        <div className={`${S}__wrapper__friends`}>
          {friendsElement}
        </div>
        <div className={`${S}__wrapper__messages`}>
          {messagesElement}
          <div className={`${S}__wrapper__messages__input`}>
            <textarea onChange={handleChange} placeholder="Write a message..." value={props.dialogPage.input.inputValue}></textarea>
            <button onClick={handleClick}>Add Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page_Items_Dialogs;
