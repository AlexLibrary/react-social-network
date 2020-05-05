import { usersAPI, profileAPI } from '../api'
import { stopSubmit } from 'redux-form'
import { setGlobalError } from './reducer_app'
/* ActionConstant */
const ADD_POST = 'reducer_profile/ADD_POST'
const SET_USER_PROFILE = 'reducer_profile/SET_USER_PROFILE'
const SET_STATUS = 'reducer_profile/SET_STATUS'
const DELETE_POST = 'reducer_profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'reducer_profile/SAVE_PHOTO_SUCCESS'
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }
    default:
      return state;
  }
}
/* ActionCreator */
export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfileAction = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

/* ThunkCreator */
export const getUserProfile = (userId) => async (dispatch) => {
  const { data } = await usersAPI.getProfile(userId)
  console.log('---data(usersAPI.getProfile)', data)
  dispatch(setUserProfileAction(data))
}
export const getStatus = (userId) => async (dispatch) => {
  const { data } = await profileAPI.getStatus(userId)
  console.log('---data(profileAPI.getStatus)', data)
  dispatch(setStatus(data))
}
export const updateStatus = (status) => async (dispatch) => {

  const { data } = await profileAPI.updateStatus(status)
  console.log('---data(profileAPI.updateStatus)', data)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  } else {
    dispatch(setGlobalError(data.messages[0]))
    setTimeout(() => { dispatch(setGlobalError(null)) }, 4000);
  }

}
export const savePhoto = (file) => async (dispatch) => {
  const { data } = await profileAPI.savePhoto(file)
  console.log('---data(profileAPI.savePhoto)', data)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().authPart.userId;
  const { data } = await profileAPI.saveProfile(profile)
  console.log('---data(profileAPI.saveProfile)', data)
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('editProfile', { _error: message }))
    return Promise.reject(message);
  }
}


export default profileReducer
