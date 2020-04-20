import Page_Items_Profile_Posts from ".";

import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  posts: state.profile.posts,
  profile: state.profile.profile
})

const mapDispatchToProps = (dispatch) => ({})

const CONT_Page_Items_Profile_Posts = connect(mapStateToProps, mapDispatchToProps)(Page_Items_Profile_Posts);

export default CONT_Page_Items_Profile_Posts;