const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1
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
        users: state.users.map(obj =>
          obj.id === action.id ? { ...obj, followed: false } : obj
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
    default:
      return state;
  }
}

export const setUsersAC = (users) => ({ type: SET_USERS, users: users })
export const followAC = (userId) => ({ type: FOLLOW, id: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, id: userId })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })


export default usersReducer
