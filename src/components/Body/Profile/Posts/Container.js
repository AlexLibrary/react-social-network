import Posts from "./Posts";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  posts: state.profile.posts,
  profile: state.profile.profile
})

export default connect(mapStateToProps, {})(Posts);;
