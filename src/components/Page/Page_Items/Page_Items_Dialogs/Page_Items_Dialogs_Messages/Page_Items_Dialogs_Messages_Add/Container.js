import Page_Items_Dialogs_Messages_Add from ".";
import { sendMessageActionCreator, updateInputMessageActionCreator } from '../../../../../../reducers/reducer_dialogs'
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  inputValue: state.dialogPage.input.value
})
const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendMessageActionCreator());
  },
  updateInputMessage: (textareaValue) => {
    dispatch(updateInputMessageActionCreator(textareaValue));
  }
})

const CONT_Page_Items_Dialogs_Messages_Add = connect(mapStateToProps, mapDispatchToProps)(Page_Items_Dialogs_Messages_Add);

export default CONT_Page_Items_Dialogs_Messages_Add;
