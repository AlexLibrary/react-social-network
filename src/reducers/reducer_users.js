const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(obj =>
          obj.id === action.id ? { ...obj, followed: true } : obj
        )
      };
    case UNFOLLOW:
      {
        return {
          ...state,
          users: state.users.map(obj =>
            obj.id === action.id ? { ...obj, followed: false } : obj
          )
        };
      }
    default:
      return state;
  }
}

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users
})
export const followAC = (userId) => ({
  type: FOLLOW,
  id: userId
})
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  id: userId
})

export default usersReducer
