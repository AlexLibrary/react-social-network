import Page_Items_Dialogs from ".";
import { sendMessageActionCreator, updateInputMessageActionCreator } from '../../../../reducers/reducer_dialogs'
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  dialogPage: state.dialogPage,
  isAuth: state.authPart.isAuth
})
const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendMessageActionCreator());
  },
  updateInputMessage: (textareaValue) => {
    dispatch(updateInputMessageActionCreator(textareaValue));
  }
})
const Container = connect(mapStateToProps, mapDispatchToProps)(Page_Items_Dialogs);

export default Container;
