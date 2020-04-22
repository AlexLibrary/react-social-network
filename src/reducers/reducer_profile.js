import { usersAPI, profileAPI } from '../api'
/* ActionConstant */
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
/* initState for Reducer */
const initialState = {
  posts: [
    { id: 0, message: 'it\'s my first most', likes: 511 },
    { id: 1, message: 'how are you', likes: 200 },
    { id: 2, message: 'hi, how are you', likes: 101 },
  ],
  profile: undefined,
  status: ''
}
/* Reducer */
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length,
        message: action.newPost,
        likes: 0
      }
      return {
        ...state,
        posts: [
          ...state.posts,
          newPost
        ]
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}
/* ActionCreator */
export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfileAction = profile => ({ type: SET_USER_PROFILE, profile })
export const setStatus = status => ({ type: SET_STATUS, status })
/* ThunkCreator */
export const getUserProfile = (userId) => (dispatch) => {

  usersAPI.getProfile(userId).then(data => {
    console.log('---data(usersAPI.getProfile)', data)
    dispatch(setUserProfileAction(data))
  });

}
export const getStatus = (userId) => (dispatch) => {

  profileAPI.getStatus(userId).then(data => {
    console.log('---data(profileAPI.getStatus)', data)
    dispatch(setStatus(data))
  });

}
export const updateStatus = (status) => (dispatch) => {

  profileAPI.updateStatus(status).then(response => {
    console.log('---data(profileAPI.updateStatus)', response)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  });

}

export default profileReducer
