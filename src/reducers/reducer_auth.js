import { authAPI } from "../api";

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
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } })

export const getAuthUserData = () => (dispatch) => {

  authAPI.me().then(data => {
    console.log('---data(authAPI.me)', data)
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setAuthUserData(id, email, login));
    }
  });

}
export const login = (email, password, rememberMe = undefined, captcha = undefined) => (dispatch) => {

  authAPI.login(email, password, rememberMe, captcha).then(data => {
    console.log('---data(authAPI.login)', data) //
    // if (res.data.resultCode === 0) {
    //   dispatch(setAuthUserData(null, null, null));
    // }
  });

}

export const logout = () => (dispatch) => {

  authAPI.logout().then(data => {
    console.log('---data(authAPI.logout)', data)
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null));
    }
  });

}

export default authReducer
