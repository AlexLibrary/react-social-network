const SEND_POST = 'SEND_POST'
const UPDATE_INPUT_POST = 'UPDATE_INPUT_POST'

const initialState = {
  inputValue: '',
  posts: [
    { id: 0, message: 'it\'s my first most', likes: 511 },
    { id: 1, message: 'how are you', likes: 200 },
    { id: 2, message: 'hi, how are you', likes: 101 },
  ]
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_POST:
      const newPost = {
        id: state.posts.length,
        message: state.inputValue,
        likes: 0
      }
      return {
        ...state,
        inputValue: '',
        posts: [
          ...state.posts,
          newPost
        ]
      }
    case UPDATE_INPUT_POST:
      return {
        ...state,
        inputValue: action.newText
      }
    default:
      return state;
  }
}

export const sendPostActionCreator = () => ({
  type: SEND_POST
})
export const updateInputPostActionCreator = textareaValue => ({
  type: UPDATE_INPUT_POST,
  newText: textareaValue
})

export default profileReducer
