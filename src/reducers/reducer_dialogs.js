const SEND_MESSAGE = 'SEND_MESSAGE'

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
      return {
        ...state,
        input: {
          ...state.input,
          messages: [
            ...state.input.messages,
            { id: state.input.messages.length, message: action.newMessage }
          ]
        }
      }
    default:
      return state;
  }
}

export const sendMessageActionCreator = (newMessage) => ({
  type: SEND_MESSAGE, newMessage
})

export default dialogsReducer
