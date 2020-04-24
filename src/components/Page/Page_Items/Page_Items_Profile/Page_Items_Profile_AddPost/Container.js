import { addPostActionCreator } from "../../../../../reducers/reducer_profile";
import Page_Items_Profile_AddPost from ".";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  inputValue: state.profile.inputValue
})
const mapDispatchToProps = (dispatch) => ({
  addPost: (newPost) => {
    dispatch(addPostActionCreator(newPost));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page_Items_Profile_AddPost);;
