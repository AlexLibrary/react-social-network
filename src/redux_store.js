import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk'
import profileReducer from "./reducers/reducer_profile";
import dialogsReducer from "./reducers/reducer_dialogs";
import sidebarReducer from "./reducers/reducer_sidebar";
import usersReducer from './reducers/reducer_users';
import authReducer from './reducers/reducer_auth';
import appReducer from './reducers/reducer_app';
import { reducer as formReducer, } from 'redux-form';

const reducers = combineReducers({
  profile: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  authPart: authReducer,
  form: formReducer,
  app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(ThunkMiddleware)
));
// const store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;

/* Window */

// declare global {
//   interface Window { store: any; }
// }

window.__store__ = store;
