import { authAPI } from "../api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) => {

  return authAPI.me().then(data => {
    console.log('---data(authAPI.me)', data)
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setAuthUserData(id, email, login, true));
    }
  });

}
export const login = (email, password, rememberMe = undefined, captcha = undefined) => (dispatch) => {

  authAPI.login(email, password, rememberMe, captcha).then(data => {
    console.log('---data(authAPI.login)', data) //
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  });

}

export const logout = () => (dispatch) => {

  authAPI.logout().then(data => {
    console.log('---data(authAPI.logout)', data)
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });

}

export default authReducer
