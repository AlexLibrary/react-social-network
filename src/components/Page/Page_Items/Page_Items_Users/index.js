import axios from 'axios'
import React from 'react'
import './style.scss'
const S = 'Page_Items_Users'

const Page_Items_Users = (props) => {

  /* FETCH */
  // fetch('https://social-network.samuraijs.com/api/1.0/users', {
  //   method: 'GET',
  // })
  //   .then(resp => resp.json())
  //   .then(function (data) {
  //     console.log('--- data', data);
  //   })

  /* AXIOS */
  axios.get('https://social-network.samuraijs.com/api/1.0/users', {
    withCredentials: true,
    headers: {
      // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
    }
  })
    .then(response => {
      console.log(response.data)
    });

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 0, fullname: 'Dmitry K.', status: 'I\'m lookinng for a job right now!', followed: false,
        photoUrl: 'https://placem.at/people?w=90&h=90&random=2',
        location:
        {
          country: 'Belarus', city: 'Minsk',
        }
      },
      {
        id: 1, fullname: 'Svetlana D.', status: 'I\'m so pretty!', followed: false,
        photoUrl: 'https://placem.at/people?w=90&h=90&random=3',
        location:
        {
          country: 'Belarus', city: 'Minsk',
        }
      },
      {
        id: 2, fullname: 'Sergei S.', status: 'I like football', followed: true,
        photoUrl: 'https://placem.at/people?w=90&h=90&random=4',
        location:
        {
          country: 'Ukrane', city: 'Kiev',
        }
      },
      {
        id: 3, fullname: 'Andrew T.', status: 'I\'m free to help you create a good moove!', followed: true,
        photoUrl: 'https://placem.at/people?w=90&h=90&random=5',
        location:
        {
          country: 'US', city: 'Philadelphia',
        }
      },
    ])
  }

  return (
    <div className={`${S}`}>
      {
        props.users.map(user => <div key={user.id}>
          <div className={`${S}__wrapper`}>
            <div className={`${S}__face`}>
              <img src={user.photoUrl} alt="" />
              {user.followed
                ? <button onClick={() => props.unfollow(user.id)}>unfollow</button>
                : <button onClick={() => props.follow(user.id)}>follow</button>
              }
            </div>
            <div className={`${S}__about`}>
              <div className={`${S}__about__fullname`}>
                {user.fullname}
              </div>
              <div className={`${S}__about__status`}>
                {user.status}
              </div>
              <div className={`${S}__about__lacation`}>
                {user.location.country},
                {user.location.city}
              </div>
            </div>
          </div>
        </div>)
      }
      <button>SHOW_MORE</button>
    </div>
  )
}

export default Page_Items_Users
