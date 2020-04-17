import { combineReducers, createStore } from 'redux';
import profileReducer from "./reducers/reducer_profile";
import dialogsReducer from "./reducers/reducer_dialogs";
import sidebarReducer from "./reducers/reducer_sidebar";
import usersReducer from './reducers/reducer_users';

const reducers = combineReducers({
  profile: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);
export default store;

/* Window */

// declare global {
//   interface Window { store: any; }
// }

window.store = store;
