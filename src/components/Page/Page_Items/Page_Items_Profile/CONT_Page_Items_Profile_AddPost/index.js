import { sendPostActionCreator, updateInputPostActionCreator } from "../../../../../reducers/reducer_profile";
import Page_Items_Profile_AddPost from "./Page_Items_Profile_AddPost";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  inputValue: state.profile.inputValue
})
const mapDispatchToProps = (dispatch) => ({
  sendPost: () => {
    dispatch(sendPostActionCreator());
  },
  updateInputPost: (textareaValue) => {
    dispatch(updateInputPostActionCreator(textareaValue));
  }
})

const CONT_Page_Items_Profile_AddPost = connect(mapStateToProps, mapDispatchToProps)(Page_Items_Profile_AddPost);

export default CONT_Page_Items_Profile_AddPost;
