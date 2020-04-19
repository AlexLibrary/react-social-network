import PageItemsDialogs from ".";
import { sendMessageActionCreator, updateInputMessageActionCreator } from '../../../../reducers/reducer_dialogs'
import { connect } from "react-redux"
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
  dialogPage: state.dialogPage
})
const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendMessageActionCreator());
  },
  updateInputMessage: (textareaValue) => {
    dispatch(updateInputMessageActionCreator(textareaValue));
  }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(PageItemsDialogs));

export default Container;
