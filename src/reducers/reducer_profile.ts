import { usersAPI, profileAPI } from '../api'
import { stopSubmit } from 'redux-form'
import { setGlobalError } from './reducer_app'
import { PostType, ProfileType, PhotosType } from '../types'
/* ActionConstant */
const ADD_POST = 'reducer_profile/ADD_POST'
const SET_USER_PROFILE = 'reducer_profile/SET_USER_PROFILE'
const SET_STATUS = 'reducer_profile/SET_STATUS'
const DELETE_POST = 'reducer_profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'reducer_profile/SAVE_PHOTO_SUCCESS'
/* initState for Reducer */

const initialState = {
  posts: [
    { id: 0, message: 'it\'s my first post', likes: 511 },
    { id: 1, message: 'how are you', likes: 200 },
    { id: 2, message: 'hi, how are you', likes: 101 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: null as string | null
}

export type InitialStateType = typeof initialState

/* Reducer */
const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        profile: { ...state.profile, photos: action.photos } as ProfileType
      }
    default:
      return state;
  }
}
/* ActionCreator */
type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPost: string
}
export const addPostActionCreator = (newPost: string): AddPostActionCreatorType => ({ type: ADD_POST, newPost })
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfileAction = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status })
type DeletePostType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId })
type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos })

/* ThunkCreator */
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const { data } = await usersAPI.getProfile(userId)
  console.log('---data(usersAPI.getProfile)', data)
  dispatch(setUserProfileAction(data))
}
export const getStatus = (userId: number) => async (dispatch: any) => {
  const { data } = await profileAPI.getStatus(userId)
  console.log('---data(profileAPI.getStatus)', data)
  dispatch(setStatus(data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {

  const { data } = await profileAPI.updateStatus(status)
  console.log('---data(profileAPI.updateStatus)', data)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  } else {
    dispatch(setGlobalError(data.messages[0]))
    setTimeout(() => { dispatch(setGlobalError(null)) }, 4000);
  }

}
export const savePhoto = (file: any) => async (dispatch: any) => {
  const { data } = await profileAPI.savePhoto(file)
  console.log('---data(profileAPI.savePhoto)', data)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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
