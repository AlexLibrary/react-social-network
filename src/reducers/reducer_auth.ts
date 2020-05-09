import { authAPI, securityAPI } from "../api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'authPart/SET_AUTH_USER_DATA'
const SET_CAPTCHA_URL = 'authPart/SET_CAPTCHA_URL'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null
}
export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case SET_CAPTCHA_URL:
      return {
        WILLERROR: 'qwe',
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
type SetAuthUserDataActionType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean | null
}
type SetAuthUserDataType = {
  type: typeof SET_AUTH_USER_DATA
  payload: SetAuthUserDataActionType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth }
})
type SetCaptchaUrlType = {
  type: typeof SET_CAPTCHA_URL
  payload: {
    captchaUrl: string
  }
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlType => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl }
})

export const getAuthUserData = () => async (dispatch: any) => {
  let { data } = await authAPI.me()
  console.log('---data(authAPI.me)', data)
  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true));
  }
}
export const login = ({ email, password, rememberMe = undefined, captcha = undefined }: any) => async (dispatch: any) => {
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
export const getCaptchaUrl = () => async (dispatch: any) => {
  let { data } = await securityAPI.getCaptchaUrl()
  console.log('---data(securityAPI.getCaptchaUrl)', data)
  dispatch(setCaptchaUrl(data.url))
}

export const logout = () => async (dispatch: any) => {
  let { data } = await authAPI.logout()
  console.log('---data(authAPI.logout)', data)
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer
