import { usersAPI } from '../api'
import { updateObjectInArrays } from '../utils/objectHelpers'
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
  pageSize: 20,
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
        users: updateObjectInArrays(state.users, action.id, 'id', { followed: true })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArrays(state.users, action.id, 'id', { followed: false })
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
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  const { data } = await usersAPI.getUsers(page, pageSize)
  console.log('---data(usersAPI.getUsers)', data)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, userId));
  const { data } = await apiMethod(userId)
  console.log(`---data(${apiMethod.name})`, data)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess)
}
export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess)
}




export default usersReducer
