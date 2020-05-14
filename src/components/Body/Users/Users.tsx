import React from 'react'
import styles from './Users.module.scss'
import Paginator from '../../modules/Paginator/Pagination'
import { UserType } from '../../../types'
import { List, Avatar, Skeleton, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

type PropsType = {
  totalItemsCount?: number
  pageSize: number
  currentPage: number
  portionSize?: number
  users: Array<UserType>
  totalUsersCount: number
  followingInProgress: Array<number>

  unfollow: (userId: number) => void
  follow: (userId: number) => void
  switchToAnotherPageNumber: (number: number) => void
}

const Users: React.FC<PropsType> = (props) => {

  // const loadMore =
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: 'center',
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: '32px',
  //       }}
  //     >
  //       <Button onClick={props.onLoadMore}>loading more</Button>
  //     </div>
  //   ) : null;

  return (
    <div className={styles.users}>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        switchToAnotherPageNumber={props.switchToAnotherPageNumber}
        currentPage={props.currentPage}
        portionSize={15}
      />
      {/* {props.users.map(user =>
        <User
          key={user.id}
          user={user}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      )} */}

      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        loadMore={false}
        dataSource={props.users}
        renderItem={item => (
          <List.Item
            actions={[
              item.followed
                ? <Button
                  disabled={props.followingInProgress.some(id => id === item.id)}
                  onClick={() => { props.unfollow(item.id) }}
                >unfollow</Button>
                : <Button
                  disabled={props.followingInProgress.some(id => id === item.id)}
                  onClick={() => { props.follow(item.id) }}
                >follow</Button>
            ]}
          >
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                avatar={
                  <NavLink to={`/profile/${item.id}`}>
                    <Avatar size={64} src={item.photos.small !== null ? item.photos.small : ''} icon={<UserOutlined />} />
                  </NavLink>
                }
                title={<NavLink to={`/profile/${item.id}`}>{item.name}</NavLink>}
                description={item.status}
              />
              {/* <div>content</div> */}
            </Skeleton>
          </List.Item>
        )}
      />
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        switchToAnotherPageNumber={props.switchToAnotherPageNumber}
        currentPage={props.currentPage}
        portionSize={15}
      />
    </div>
  )
}

export default Users
