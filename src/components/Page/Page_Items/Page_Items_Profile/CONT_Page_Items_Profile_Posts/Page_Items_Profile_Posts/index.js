import React from "react";
import PageItemsProfilePostsitem from "./Page_Items_Profile_Posts_item";
import './style.scss'
const S = 'Page_Items_Profile_Posts';

const Page_Items_Profile_Posts = (props) => {
  return (
    <div className={`${S}`}>
      <h2>My posts</h2>
      {props.posts.map(obj => <PageItemsProfilePostsitem message={obj.message} likes={obj.likes} key={obj.id} />)}
    </div>
  )
}

export default Page_Items_Profile_Posts;
