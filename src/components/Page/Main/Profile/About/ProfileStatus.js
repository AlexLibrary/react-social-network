import React from "react";
// import './style.scss'
const S = 'Page_Items_Profile_About_Status';

class Status extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  handleActivateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  handleDeactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  handleOnChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
    const state = this.state;
    const props = this.props;
    console.dir({
      STATE: { state, prevState },
      PROPS: { props, prevProps }
    });
    /* Example
      STATE: {
        state: {editMode: false, status: ""},
        prevState: {editMode: false, status: ""},
        __proto__: Object
      }
      PROPS:{
        props: {status: "421412", updateStatus: ƒ},
        prevProps: {status: "", updateStatus: ƒ},
        __proto__: Object
      }
    */
  }

  render() {
    // console.log('---render');
    return (
      <div className={`${S}`} >
        <div>Status:</div>
        {!this.state.editMode &&
          <div className={`${S}_output`} onClick={this.handleActivateEditMode} >
            <span>{this.props.status || '------'}</span>
          </div>
        }
        {this.state.editMode &&
          <div className={`${S}_input`}>
            <input autoFocus={true} value={this.state.status} onBlur={this.handleDeactivateEditMode} onChange={this.handleOnChange} />
          </div>
        }
      </div >
    )
  }
}

export default Status;
