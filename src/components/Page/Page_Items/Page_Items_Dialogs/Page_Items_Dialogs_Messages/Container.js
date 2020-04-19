import Page_Items_Dialogs_Messages from ".";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  messages: state.dialogPage.input.messages
})
const mapDispatchToProps = (dispatch) => ({})
const CONT_Page_Items_Dialogs_Messages = connect(mapStateToProps, mapDispatchToProps)(Page_Items_Dialogs_Messages);

export default CONT_Page_Items_Dialogs_Messages;
