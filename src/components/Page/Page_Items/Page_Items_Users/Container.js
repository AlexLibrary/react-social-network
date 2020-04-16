import Page_Items_Users from ".";
import { connect } from "react-redux"
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../../../reducers/reducer_users";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
})
const mapDispatchToProps = (dispatch) => ({
  follow: userId => { dispatch(followAC(userId)) },
  unfollow: userId => { dispatch(unfollowAC(userId)) },
  setUsers: (users) => { dispatch(setUsersAC(users)) },
  setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
  setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(Page_Items_Users);

