import { combineReducers, createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk'
import profileReducer from "./reducers/reducer_profile";
import dialogsReducer from "./reducers/reducer_dialogs";
import sidebarReducer from "./reducers/reducer_sidebar";
import usersReducer from './reducers/reducer_users';
import authReducer from './reducers/auth_users';

const reducers = combineReducers({
  profile: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  authPart: authReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;

/* Window */

// declare global {
//   interface Window { store: any; }
// }

window.store = store;
