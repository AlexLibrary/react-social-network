import { addPostActionCreator } from "../../../../reducers/reducer_profile";
import AddPost from "./AddPost";
import { reset } from 'redux-form';
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  inputValue: state.profile.inputValue
})
const mapDispatchToProps = (dispatch) => ({
  addPost: (newPost) => {
    dispatch(addPostActionCreator(newPost));
    dispatch(reset('profileAddPostForm'));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);;
