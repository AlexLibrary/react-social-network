import profileReducer, { addPostActionCreator, deletePost } from "./reducer_profile";
/* test data */
const state = {
  posts: [
    { id: 0, message: 'it\'s my first most', likes: 511 },
    { id: 1, message: 'how are you', likes: 200 },
    { id: 2, message: 'hi, how are you', likes: 101 },
  ]
}

test('message of new post should be "dima"', () => {
  // 1. test data
  const action = addPostActionCreator('dima');

  // 2. action
  const newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(4)
});

test('length of post should be incremented', () => {
  // 1. test data
  const action = addPostActionCreator('dima');

  // 2. action
  const newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts[3].message).toBe('dima')
});

test('after deleting length of message should be decrement', () => {
  // 1. test data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(2)
});

test('after deleting length shouldn\'t be decrement if ID is incorrect', () => {
  // 1. test data
  const action = deletePost(1000);

  // 2. action
  const newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(3)
});


