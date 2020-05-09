import { getAuthUserData } from "./reducer_auth";

const INITIALIZED_SUCCESS = 'reducer_app/INITIALIZED_SUCCESS'
const SET_GLOBAL_ERROR = 'reducer_app/SET_GLOBAL_ERROR'

const initialState = {
  initialized: false as boolean,
  globalError: null as string | null
}
export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    case SET_GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.errorMessage
      };
    default:
      return state;
  }
}

type InitializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessType => ({ type: INITIALIZED_SUCCESS })
type SetGlobalErrorType = {
  type: typeof SET_GLOBAL_ERROR
  errorMessage: string
}
export const setGlobalError = (errorMessage: any): SetGlobalErrorType => ({ type: SET_GLOBAL_ERROR, errorMessage })

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
