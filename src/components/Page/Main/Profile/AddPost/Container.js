import { addPostActionCreator } from "../../../../../reducers/reducer_profile";
import AddPost from ".";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  inputValue: state.profile.inputValue
})
const mapDispatchToProps = (dispatch) => ({
  addPost: (newPost) => {
    dispatch(addPostActionCreator(newPost));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);;
