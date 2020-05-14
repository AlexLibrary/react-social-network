import React from "react";
import styles from './Posts.module.scss'
import 'antd/es/avatar/style/index.css'
import 'antd/es/list/style/index.css'
import 'antd/es/space/style/index.css'
import { List, Avatar, Space } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
// import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Posts = (props) => {

  const avatar = props.profile.photos.small || ""
  const username = props.profile.fullName

  const SetPosts = () => {
    const post = (
      <List
        itemLayout="vertical"
        dataSource={[...props.posts].reverse()}
        renderItem={post => (
          <List.Item
            key={post.id}
            actions={[
              <IconText icon={LikeOutlined} text={post.likes} key={post.id} />, 'edit'
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={avatar} icon={<UserOutlined />} />}
              // title={username}
              description={username}
            />
            {post.message}
          </List.Item>
        )}
      />
    )

    return post
  }

  return (
    <div className={styles.posts}>
      <SetPosts />
    </div>
  )
}

export default Posts;
