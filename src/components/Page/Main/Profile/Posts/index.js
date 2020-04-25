import React from "react";
import styles from './style.module.scss'

const Posts = (props) => {

  const SetPosts = () => {
    const post = props.posts.map(obj =>
      <div className={styles.posts_items} key={obj.id}>
        <img src={props.profile.photos.small ? props.profile.photos.small : "https://placem.at/people?w=70&h=70&random=1"} alt="" />
        {obj.message}
        <div className={styles.posts_likes}>
          likes: {obj.likes}
        </div>
      </div>
    )
    return post
  }

  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <SetPosts />
    </div>
  )
}

export default Posts;
