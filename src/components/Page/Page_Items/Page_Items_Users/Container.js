import Page_Items_Users from ".";
import { connect } from "react-redux"
import { followAC, unfollowAC, setUsersAC } from "../../../../reducers/reducer_users";

const mapStateToProps = (state) => ({
  users: state.usersPage.users
})
const mapDispatchToProps = (dispatch) => ({
  follow: userId => {
    dispatch(followAC(userId))
  },
  unfollow: userId => {
    dispatch(unfollowAC(userId))
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Page_Items_Users);

