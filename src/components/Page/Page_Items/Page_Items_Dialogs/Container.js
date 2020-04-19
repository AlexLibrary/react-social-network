import PageItemsDialogs from ".";
import { sendMessageActionCreator, updateInputMessageActionCreator } from '../../../../reducers/reducer_dialogs'
import { connect } from "react-redux"
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(PageItemsDialogs);
