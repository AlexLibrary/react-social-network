const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

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

export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const follow = (userId) => ({ type: FOLLOW, id: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, id: userId })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (isFollowing, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollowing, userId })

// export const ACUsers = {
//   setUsers(users) { return { type: SET_USERS, users: users } },
//   follow(userId) { return { type: FOLLOW, id: userId } },
//   unfollow(userId) { return { type: UNFOLLOW, id: userId } },
//   setCurrentPage(currentPage) { return { type: SET_CURRENT_PAGE, currentPage } },
//   setTotalUsersCount(totalUsersCount) { return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } },
//   toggleIsFetching(isFetching) { return { type: TOGGLE_IS_FETCHING, isFetching } },
//   toggleFollowingInProgress(isFetching) { return { type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching } },
// }

export default usersReducer
