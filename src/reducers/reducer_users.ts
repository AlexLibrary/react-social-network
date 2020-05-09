import { usersAPI } from '../api'
import { updateObjectInArrays } from '../utils/objectHelpers'
import { UserType } from '../types'
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
  users: [] as Array<UserType>,
  pageSize: 20 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number> // [...usersIds]
}

export type InitialStateType = typeof initialState

/* Reducer */
const usersReducer = (state = initialState, action: any): InitialStateType => {
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
type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({
  type: SET_USERS, users
})
type FollowSuccessType = {
  type: typeof FOLLOW
  id: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({
  type: FOLLOW, id: userId
})
type UnfollowSuccessType = {
  type: typeof UNFOLLOW
  id: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
  type: UNFOLLOW, id: userId
})
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE, currentPage
})
type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING, isFetching
})
type ToggleFollowingInProgressType = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
  isFollowing: boolean
  userId: number
}
export const toggleFollowingInProgress = (isFollowing: boolean, userId: number): ToggleFollowingInProgressType => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollowing, userId
})
/* ThunkCreators */
export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  const { data } = await usersAPI.getUsers(page, pageSize)
  console.log('---data(usersAPI.getUsers)', data)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingInProgress(true, userId));
  const { data } = await apiMethod(userId)
  console.log(`---data(${apiMethod.name})`, data)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess)
}
export const unfollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess)
}

export default usersReducer
