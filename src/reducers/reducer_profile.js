import { usersAPI } from '../api'
/* ActionConstant */
const SEND_POST = 'SEND_POST'
const UPDATE_INPUT_POST = 'UPDATE_INPUT_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
/* initState for Reducer */
const initialState = {
  inputValue: '',
  posts: [
    { id: 0, message: 'it\'s my first most', likes: 511 },
    { id: 1, message: 'how are you', likes: 200 },
    { id: 2, message: 'hi, how are you', likes: 101 },
  ],
  profile: undefined
}
/* Reducer */
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_POST:
      const newPost = {
        id: state.posts.length,
        message: state.inputValue,
        likes: 0
      }
      return {
        ...state,
        inputValue: '',
        posts: [
          ...state.posts,
          newPost
        ]
      }
    case UPDATE_INPUT_POST:
      return {
        ...state,
        inputValue: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
}
/* ActionCreator */
export const sendPostActionCreator = () => ({ type: SEND_POST })
export const updateInputPostActionCreator = textareaValue => ({ type: UPDATE_INPUT_POST, newText: textareaValue })
export const setUserProfileAction = profile => ({ type: SET_USER_PROFILE, profile })
/* ThunkCreator */
export const getUserProfile = (userId = 2) => (dispatch) => {

  usersAPI.getProfile(userId).then(data => {
    console.log('--- data', data)
    dispatch(setUserProfileAction(data))
  });

}

export default profileReducer
