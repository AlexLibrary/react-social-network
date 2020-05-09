const SEND_MESSAGE = 'SEND_MESSAGE'

type FriendType = {
  id: number,
  name: string
}
type MessageType = {
  id: number,
  message: string
}

const initialState = {
  friends: [
    { id: 0, name: "Dimych" },
    { id: 1, name: "Sveta" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Alexandra" },
    { id: 4, name: "Viktor" },
    { id: 5, name: "Valera" }
  ] as Array<FriendType>,
  messages: [
    { id: 0, message: "hi" },
    { id: 1, message: "how are you" },
    { id: 2, message: "yo" },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "how are you" },
    { id: 6, message: "yo" }
  ] as Array<MessageType>
}
export type InitialState = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length, message: action.newMessage }
        ]
      }
    default:
      return state;
  }
}

type SendMessageACType = {
  type: typeof SEND_MESSAGE
  newMessage: string
}
export const sendMessageAC = (newMessage: string): SendMessageACType => ({
  type: SEND_MESSAGE, newMessage
})

export default dialogsReducer
