import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const S = 'Page_Items_Users'

const Page_Items_Users = (props) => {

  const createNumbers = () => {
    const numbers = []
    const pages = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= pages; i++) {
      numbers.push(
        <span key={i} onClick={() => props.handleClick(i)} className={
          props.currentPage === i ? `${S}__lists__item active` : `${S}__lists__item`
        }>{i}</span>
      )
    }
    return numbers
  }

  return (
    <div className={`${S}`}>
      <div className={`${S}__lists`}>
        {createNumbers()}
      </div>
      {
        props.users.map(user =>
          <div key={user.id}>
            <div className={`${S}__wrapper`}>
              <div className={`${S}__face`} >
                <NavLink to={`/profile/${user.id}`}>
                  <img src={
                    user.photos.small === null
                      ? `https://placem.at/people?w=90&h=90&random=${user.id}`
                      : user.photos.small
                  } alt="" />
                </NavLink>

                {user.followed
                  ? <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
                      }
                    })
                      .then(response => {
                        console.log('--- response.data', response.data)
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id)
                        }
                      });

                  }}>unfollow</button>
                  : <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
                      }
                    })
                      .then(response => {
                        console.log('--- response.data', response.data)
                        if (response.data.resultCode === 0) {
                          props.follow(user.id)
                        }
                      });

                  }}>follow</button>
                }
              </div>
              <div className={`${S}__about`} >
                <div className={`${S}__about__fullname`}>
                  {user.name}
                </div>
                <div className={`${S}__about__status`}>
                  {user.status}
                </div>
                <div className={`${S}__about__lacation`}>
                  {'user.location.country'},
                {'user.location.city'}
                </div>
              </div>
            </div>
          </div>)
      }
      {/* <button>SHOW_MORE</button> */}
    </div>
  )
}

export default Page_Items_Users
