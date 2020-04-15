// import profileReducer from "./reducers/reducer_profile";
// import dialogsReducer from "./reducers/reducer_dialogs";
// import sidebarReducer from "./reducers/reducer_sidebar";

// const store = {
//   _state: {
//     profile: {
//       inputValue: '',
//       posts: [
//         { id: 1, message: 'it\'s my first most', likes: 511 },
//         { id: 2, message: 'how are you', likes: 200 },
//         { id: 3, message: 'hi, how are you', likes: 101 },
//       ]
//     },
//     dialogPage: {
//       friends: [
//         { id: "1", name: "Dimych" },
//         { id: "2", name: "Sveta" },
//         { id: "3", name: "Andrey" },
//         { id: "4", name: "Alexandra" },
//         { id: "5", name: "Viktor" },
//         { id: "6", name: "Valera" }
//       ],
//       input: {
//         value: '',
//         messages: [
//           { id: "0", message: "hi" },
//           { id: "0", message: "how are you" },
//           { id: "1", message: "yo" },
//           { id: "0", message: "yo" },
//           { id: "1", message: "yo" },
//           { id: "0", message: "how are you" },
//           { id: "1", message: "yo" }
//         ]
//       },
//     },
//     sidebar: {}
//   },
//   getState() {
//     return this._state
//   },
//   _callRender(_state) { },
//   subscribe(cbRender) { // subscribe(observer)
//     this._callRender = cbRender;
//   },

//   addPostInProfile() {
//     const profile = this._state.profile;
//     const obj = {
//       id: profile.posts.length,
//       message: profile.inputValue,
//       likes: 0
//     }
//     profile.posts.push(obj);
//     this._state.profile.inputValue = '';
//     this._callRender(this);
//   },
//   changeInputInPost(newText) {
//     this._state.profile.inputValue = newText.toString();
//     this._callRender(this);
//   },
//   dispatch(action) {
//     const state = this._state;
//     state.profile = profileReducer(state.profile, action);
//     state.dialogPage = dialogsReducer(state.dialogPage, action);
//     state.sidebar = sidebarReducer(state.sidebar, action);

//     this._callRender(this);
//   }
// };

// /* Window */

// // declare global {
// //   interface Window { store: any; }
// // }

// // window.store = store;

// export default store;
