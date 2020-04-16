import * as axios from 'axios'
import React from 'react'
import './style.scss'
const S = 'Page_Items_Users'

class Page_Items_Users extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
    // if (this.props.users.length === 0) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {
        // 'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
      }
    })
      .then(response => {
        console.log('--- response.data', response.data)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
    // }
  }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  handleClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
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

  render() {

    const createNumbers = () => {
      const numbers = []
      const pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
      for (let i = 1; i <= pages; i++) {
        numbers.push(
          <span onClick={() => this.handleClick(i)} className={
            this.props.currentPage === i ? `${S}__lists__item active` : `${S}__lists__item`
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
