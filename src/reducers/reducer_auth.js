import { authAPI, securityAPI } from "../api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'authPart/SET_AUTH_USER_DATA'
const SET_CAPTCHA_URL = 'authPart/SET_CAPTCHA_URL'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })
export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch) => {
  let { data } = await authAPI.me()
  console.log('---data(authAPI.me)', data)
  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true));
  }
}
export const login = ({ email, password, rememberMe = undefined, captcha = undefined }) => async (dispatch) => {
  let { data } = await authAPI.login(email, password, rememberMe, captcha)
  console.log('---data(authAPI.login)', data)
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}
export const getCaptchaUrl = () => async (dispatch) => {
  let { data } = await securityAPI.getCaptchaUrl()
  console.log('---data(securityAPI.getCaptchaUrl)', data)
  dispatch(setCaptchaUrl(data.url))
}

export const logout = () => async (dispatch) => {
  let { data } = await authAPI.logout()
  console.log('---data(authAPI.logout)', data)
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer