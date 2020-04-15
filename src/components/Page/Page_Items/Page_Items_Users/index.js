import * as axios from 'axios'
import React from 'react'
import './style.scss'
const S = 'Page_Items_Users'

class Page_Items_Users extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=4', {
        withCredentials: true,
        headers: {
          // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
        }
      })
        .then(response => {
          console.log('--- response.data', response.data)
          this.props.setUsers(response.data.items)
        });
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getUsers = () => {
    if (this.props.users.length === 0) {
      /* FETCH */
      // fetch('https://social-network.samuraijs.com/api/1.0/users', {
      //   method: 'GET',
      //   headers: {
      //    'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      //   }
      // })
      //   .then(resp => resp.json())
      //   .then(function (data) {
      //     console.log('--- data', data);
      //   })
      /* AXIOS */
      axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=4', {
        withCredentials: true,
        headers: {
          // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
        }
      })
        .then(response => {
          console.log('--- response.data', response.data)
          this.props.setUsers(response.data.items)
        });
    }
  }

  render() {
    return (
      <div className={`${S}`}>
        <button onClick={this.getUsers}>getUsers</button>
        {
          this.props.users.map(user => <div key={user.id}>
            <div className={`${S}__wrapper`}>
              <div className={`${S}__face`}>
                <img src={
                  user.photos.small === null
                    ? `https://placem.at/people?w=90&h=90&random=${user.id}`
                    : user.photos.small
                } alt="" />
                {user.followed
                  ? <button onClick={() => this.props.unfollow(user.id)}>unfollow</button>
                  : <button onClick={() => this.props.follow(user.id)}>follow</button>
                }
              </div>
              <div className={`${S}__about`}>
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
        <button>SHOW_MORE</button>
      </div>
    )
  }
}

export default Page_Items_Users
