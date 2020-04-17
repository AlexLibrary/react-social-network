import React from "react";
import './style.scss'
const S = 'Page_Items_Profile_Posts';

const Page_Items_Profile_Posts = (props) => {

  const SetPosts = () => {
    const post = props.posts.map(obj =>
      <div className={`${S}__items`} key={obj.id}>
        <img src={props.profile.photos.small ? props.profile.photos.small : "https://placem.at/people?w=70&h=70&random=1"} alt="" />
        {obj.message}
        <div className={`${S}__likes`}>
          likes: {obj.likes}
        </div>
      </div>
    )
    return post
  }

  return (
    <div className={`${S}`}>
      <h2>My posts</h2>
      <SetPosts />
    </div>
  )
}

export default Page_Items_Profile_Posts;
