import PageItemsDialogs from ".";
import { sendMessageAC } from '../../../../reducers/reducer_dialogs'
import { connect } from "react-redux"
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { compose } from "redux";

const mapStateToProps = (state) => ({
  dialogPage: state.dialogPage
})
const mapDispatchToProps = (dispatch) => ({
  sendMessage: (newMessage) => {
    dispatch(sendMessageAC(newMessage));
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(PageItemsDialogs);
