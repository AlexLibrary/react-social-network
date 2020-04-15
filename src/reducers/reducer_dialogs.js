const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE'

const initialState = {
  friends: [
    { id: 0, name: "Dimych" },
    { id: 1, name: "Sveta" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Alexandra" },
    { id: 4, name: "Viktor" },
    { id: 5, name: "Valera" }
  ],
  input: {
    value: '',
    messages: [
      { id: 0, message: "hi" },
      { id: 1, message: "how are you" },
      { id: 2, message: "yo" },
      { id: 3, message: "yo" },
      { id: 4, message: "yo" },
      { id: 5, message: "how are you" },
      { id: 6, message: "yo" }
    ]
  },
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.input.messages.length,
        message: state.input.value
      }
      return {
        ...state,
        input: {
          ...state.input,
          value: '',
          messages: [
            ...state.input.messages,
            newMessage
          ]
        }
      }
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        input: {
          ...state.input,
          value: action.newText
        }
      }
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE
})
export const updateInputMessageActionCreator = textareaValue => ({
  type: UPDATE_INPUT_MESSAGE,
  newText: textareaValue
})

export default dialogsReducer
