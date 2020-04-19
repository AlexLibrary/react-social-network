import { usersAPI } from '../api'
/* ActionConstant */
const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'
/* initState for Reducer */
const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}
/* Reducer */
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(obj =>
          obj.id === action.id ? { ...obj, followed: true } : obj
        )
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, followed: false } : user
        )
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId] // state.followingInProgress.push(action.userId)
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
}
/* ActionCreators */
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const followSuccess = (userId) => ({ type: FOLLOW, id: userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, id: userId })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (isFollowing, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollowing, userId })
/* ThunkCreators */
export const getUsers = (currentPage, pageSize) => (dispatch) => {

  dispatch(toggleIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    console.log('---data(usersAPI.getUsers)', data)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  });

}
export const follow = (userId) => (dispatch) => {

  dispatch(toggleFollowingInProgress(true, userId));
  usersAPI.follow(userId).then(data => {
    console.log('---data(usersAPI.follow)', data)
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));
  });

}
export const unfollow = (userId) => (dispatch) => {

  dispatch(toggleFollowingInProgress(true, userId));
  usersAPI.unfollow(userId).then(data => {
    console.log('---data(usersAPI.unfollow)', data)
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));
  });

}




export default usersReducer
