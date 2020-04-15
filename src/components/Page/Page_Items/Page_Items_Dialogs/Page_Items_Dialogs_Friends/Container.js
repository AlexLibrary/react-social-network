import Page_Items_Dialogs_Friends from ".";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  friends: state.dialogPage.friends
})
const mapDispatchToProps = (dispatch) => ({})
const Page_Items_Dialogs_Friends_CONT = connect(mapStateToProps, mapDispatchToProps)(Page_Items_Dialogs_Friends);

export default Page_Items_Dialogs_Friends_CONT;
