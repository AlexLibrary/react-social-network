import React from "react";
import './style.scss'
const S = 'Page_Items_Profile_AddPost';

const Page_Items_Profile_AddPost = (props) => {

  const handleClickButton = () => {
    props.sendPost();
  }

  const handleChangePost = e => {
    const textareaValue = e.target.value;
    props.updateInputPost(textareaValue);
  }

  return (
    <div className={`${S}`}>
      <textarea onChange={handleChangePost} placeholder="Write a post..." value={props.inputValue} />
      <button onClick={handleClickButton}>Add Post</button>
      {/* <button>Remove Post</button> */}
    </div>
  )
}

export default Page_Items_Profile_AddPost;
