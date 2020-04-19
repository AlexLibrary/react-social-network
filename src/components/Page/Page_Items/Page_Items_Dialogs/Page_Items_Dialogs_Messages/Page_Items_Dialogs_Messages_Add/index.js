import React from "react";
import './style.scss'
const S = 'Page_Items_Dialogs_Messages_Add';

const Page_Items_Dialogs_Messages_Add = (props) => {
  const handleClick = () => {
    props.sendMessage();
  }

  const handleChange = e => {
    const textareaValue = e.target.value;
    props.updateInputMessage(textareaValue)
  }

  return (
    <div className={`${S}`}>
      <textarea onChange={handleChange} placeholder="Write a message..." value={props.inputValue}></textarea>
      <button onClick={handleClick}>Add Post</button>
    </div>
  )
}

export default Page_Items_Dialogs_Messages_Add;
