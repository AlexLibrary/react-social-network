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
  handleDeactivateEditMode = (e) => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(e.target.value)
  }
  handleOnChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }


  render() {
    return (
      <div className={`${S}`} >
        <span>Status:</span>
        {!this.state.editMode &&
          <div className={`${S}_output`} onClick={this.handleActivateEditMode}>
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
