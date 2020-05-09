const initialState = {}
export type InitialStateType = typeof initialState
const sidebarReducer = (state = initialState, action: any): InitialStateType => {
  // return JSON.parse(JSON.stringify(state));;
  return state;
}

export default sidebarReducer
