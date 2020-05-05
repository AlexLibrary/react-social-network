import { getAuthUserData } from "./reducer_auth";

const INITIALIZED_SUCCESS = 'reducer_app/INITIALIZED_SUCCESS'
const SET_GLOBAL_ERROR = 'reducer_app/SET_GLOBAL_ERROR'

const initialState = {
  initialized: false,
  globalError: null
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    case SET_GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.message
      };
    default:
      return state;
  }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })
export const setGlobalError = (message) => ({ type: SET_GLOBAL_ERROR, message })

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
